"""
FastAPI Backend - Eco Route Analyzer
Centralized endpoint that orchestrates all API calls
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio

from services.geocoding import geocode_location
from services.routing import get_route, sample_route_points
from services.elevation import get_elevations
from services.eco_score import calculate_eco_score

app = FastAPI(title="Eco Route API")

# === CORS CONFIGURATION ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === REQUEST/RESPONSE MODELS ===
class RouteRequest(BaseModel):
    start: str
    end: str

class RouteResponse(BaseModel):
    eco_score: float
    co2_saved_kg: float
    terrain_penalty: float
    traffic_penalty: int
    distance_km: float
    route_geometry: list  # [[lon, lat], [lon, lat], ...]
    start_coords: list  # [lat, lon]
    end_coords: list    # [lat, lon]

# === MAIN ENDPOINT ===
@app.post("/api/analyze-route", response_model=RouteResponse)
async def analyze_route(request: RouteRequest):
    """
    Single endpoint that does everything:
    1. Geocode start & end
    2. Get route from OSRM
    3. Sample elevation points
    4. Calculate eco-score
    
    Returns complete analyzed route data
    """
    try:
        # STEP 1: Geocode both locations concurrently
        start_task = geocode_location(request.start)
        end_task = geocode_location(request.end)
        
        start_coords, end_coords = await asyncio.gather(start_task, end_task)
        
        if not start_coords or not end_coords:
            raise HTTPException(
                status_code=400,
                detail="Could not find one or both locations. Please be more specific."
            )
        
        # STEP 2: Get route geometry
        route_data = await get_route(start_coords, end_coords)
        
        if not route_data:
            raise HTTPException(
                status_code=400,
                detail="Could not find a route between these locations."
            )
        
        # STEP 3: Sample points along route for elevation
        sampled_points = sample_route_points(route_data["geometry"], num_samples=15)
        
        # STEP 4: Get elevation data
        elevations = await get_elevations(sampled_points)
        
        # STEP 5: Calculate eco-score
        distance_km = route_data["distance"] / 1000  # Convert meters to km
        score_data = calculate_eco_score(elevations, distance_km)
        
        # STEP 6: Package everything into response
        return RouteResponse(
            eco_score=score_data["eco_score"],
            co2_saved_kg=score_data["co2_saved_kg"],
            terrain_penalty=score_data["terrain_penalty"],
            traffic_penalty=score_data["traffic_penalty"],
            distance_km=score_data["distance_km"],
            route_geometry=route_data["geometry"],
            start_coords=[start_coords[0], start_coords[1]],
            end_coords=[end_coords[0], end_coords[1]]
        )
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error in analyze_route: {e}")
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

# === HEALTH CHECK ===
@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Eco Route API is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)