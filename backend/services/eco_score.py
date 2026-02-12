"""
Eco-Score Algorithm - Calculates environmental score based on terrain and traffic
"""
from datetime import datetime
from typing import List

def calculate_eco_score(
    elevations: List[float],
    distance_km: float,
    current_hour: int = None
) -> dict:
    """
    Calculate eco-score based on terrain difficulty and traffic
    
    Args:
        elevations: List of elevation points in meters
        distance_km: Total route distance in kilometers
        current_hour: Hour of day (0-23), defaults to current time
    
    Returns:
        Dict with eco_score, co2_saved, terrain_penalty, traffic_penalty
    """
    if current_hour is None:
        current_hour = datetime.now().hour
    
    base_score = 100
    
    # === TERRAIN PENALTY ===
    terrain_penalty = 0
    elevation_coeff = 2.0  # Penalty per meter of climb
    
    for i in range(1, len(elevations)):
        altitude_change = elevations[i] - elevations[i-1]
        if altitude_change > 0:  # Only penalize uphill
            terrain_penalty += altitude_change * elevation_coeff
    
    # Cap terrain penalty at 40 points
    terrain_penalty = min(terrain_penalty, 40)
    
    # === TRAFFIC PENALTY ===
    traffic_penalty = 0
    rush_hours = [7, 8, 9, 17, 18, 19]  # Morning and evening rush
    
    if current_hour in rush_hours:
        traffic_penalty = 25
    elif 10 <= current_hour <= 16:  # Midday - moderate traffic
        traffic_penalty = 10
    else:  # Night/early morning - low traffic
        traffic_penalty = 5
    
    # === CALCULATE FINAL SCORE ===
    eco_score = base_score - terrain_penalty - traffic_penalty
    eco_score = max(eco_score, 0)  # Don't go below 0
    
    # === CO2 SAVINGS CALCULATION ===
    # Average car emits ~120g CO2 per km
    # Cycling saves this amount
    co2_saved_grams = distance_km * 120
    co2_saved_kg = co2_saved_grams / 1000
    
    return {
        "eco_score": round(eco_score, 1),
        "co2_saved_kg": round(co2_saved_kg, 2),
        "terrain_penalty": round(terrain_penalty, 1),
        "traffic_penalty": traffic_penalty,
        "distance_km": round(distance_km, 2)
    }