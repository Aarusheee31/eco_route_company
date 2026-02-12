"""
Geocoding Service - Converts location names to coordinates using Nominatim
"""
import httpx
from typing import Tuple, Optional

async def geocode_location(location: str) -> Optional[Tuple[float, float]]:
    """
    Convert location string to (latitude, longitude)
    
    Args:
        location: Address or place name (e.g., "Delhi, India")
    
    Returns:
        Tuple of (lat, lon) or None if not found
    """
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "q": location,
        "format": "json",
        "limit": 1
    }
    headers = {
        "User-Agent": "EcoRouteHackathon/1.0"
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, params=params, headers=headers, timeout=10.0)
            response.raise_for_status()
            data = response.json()
            
            if data:
                return (float(data[0]["lat"]), float(data[0]["lon"]))
            return None
        except Exception as e:
            print(f"Geocoding error: {e}")
            return None