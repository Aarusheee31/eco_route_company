"""
Routing Service - Gets route geometry using OSRM
"""
import httpx
from typing import List, Dict, Optional

async def get_route(start_coords: tuple, end_coords: tuple) -> Optional[Dict]:
    """
    Get route from OSRM API
    
    Args:
        start_coords: (lat, lon)
        end_coords: (lat, lon)
    
    Returns:
        Dict with 'geometry' (polyline) and 'distance' (meters)
    """
    # OSRM expects lon,lat format
    start_lon, start_lat = start_coords[1], start_coords[0]
    end_lon, end_lat = end_coords[1], end_coords[0]
    
    url = f"http://router.project-osrm.org/route/v1/driving/{start_lon},{start_lat};{end_lon},{end_lat}"
    params = {
        "overview": "full",
        "geometries": "geojson"
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, params=params, timeout=10.0)
            response.raise_for_status()
            data = response.json()
            
            if data.get("routes"):
                route = data["routes"][0]
                return {
                    "geometry": route["geometry"]["coordinates"],  # [[lon, lat], ...]
                    "distance": route["distance"]  # meters
                }
            return None
        except Exception as e:
            print(f"Routing error: {e}")
            return None


def sample_route_points(coordinates: List[List[float]], num_samples: int = 20) -> List[List[float]]:
    """
    Sample points along the route for elevation queries
    
    Args:
        coordinates: [[lon, lat], [lon, lat], ...]
        num_samples: Number of points to sample
    
    Returns:
        List of sampled coordinates
    """
    if len(coordinates) <= num_samples:
        return coordinates
    
    step = len(coordinates) // num_samples
    return [coordinates[i] for i in range(0, len(coordinates), step)][:num_samples]