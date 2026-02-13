def calculate_eco_score(elevations, distance_km):
    
    total_climb = sum([max(0, elevations[i+1] - elevations[i]) for i in range(len(elevations)-1)])
    
   
    elevation_coeff = 0.4 
    
    terrain_penalty = total_climb * elevation_coeff
    
    
    terrain_penalty = min(terrain_penalty, 60) 

    
    base_score = 100
    traffic_penalty = 5 
    
    final_score = base_score - traffic_penalty - terrain_penalty
    
    
    co2_saved = round(distance_km * 0.12, 2)

    return {
        "eco_score": max(10, int(final_score)),
        "co2_saved_kg": co2_saved,
        "terrain_penalty": round(terrain_penalty, 1),
        "traffic_penalty": traffic_penalty,
        "distance_km": round(distance_km, 2)
    }

from datetime import datetime

def calculate_eco_score(elevations, distance_km):
    
    total_climb = sum([max(0, elevations[i+1] - elevations[i]) for i in range(len(elevations)-1)])
    
   
    incline_penalty = total_climb * 0.02
    incline_penalty = min(incline_penalty, 50)  

    current_hour = datetime.now().hour
    if (8 <= current_hour <= 10) or (17 <= current_hour <= 20):
        traffic_penalty = 30
        traffic_label = "Heavy (Rush Hour)"
    elif (11 <= current_hour <= 16) or (21 <= current_hour <= 23):
        traffic_penalty = 15
        traffic_label = "Moderate"
    else:
        traffic_penalty = 5
        traffic_label = "Low (Clear)"

   
    final_score = 100 - incline_penalty - traffic_penalty
    
 
    final_score = max(10, int(final_score))

   
    co2_saved = round(distance_km * 0.12, 2)

    return {
        "eco_score": final_score,
        "co2_saved_kg": co2_saved,
        "terrain_penalty": round(incline_penalty, 1),
        "traffic_penalty": traffic_penalty,
        "traffic_condition": traffic_label,
        "distance_km": round(distance_km, 2)
    }