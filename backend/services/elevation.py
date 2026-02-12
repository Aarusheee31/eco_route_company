"""
Elevation Service - Gets elevation data for route points
"""
import httpx
from typing import List, Dict

async def get_elevations(coordinates: List[List[float]]) -> List[float]:
    """
    Get elevation for multiple points
    
    Args:
        coordinates: [[lon, lat], [lon, lat], ...]
    
    Returns:
        List of elevations in meters
    """
    url = "https://api.open-elevation.com/api/v1/lookup"
    
    # Convert to lat,lon format for Open-Elevation
    locations = [{"latitude": coord[1], "longitude": coord[0]} for coord in coordinates]
    
    payload = {"locations": locations}
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, json=payload, timeout=15.0)
            response.raise_for_status()
            data = response.json()
            
            return [point["elevation"] for point in data["results"]]
        except Exception as e:
            print(f"Elevation error: {e}")
            # Return flat terrain as fallback
            return [0.0] * len(coordinates)