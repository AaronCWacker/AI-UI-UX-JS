
#!/usr/bin/env python3
"""
Generate healthcare dashboard data for static deployment
"""
import json
import os
from datetime import datetime, timedelta
import random

def generate_health_metrics():
    """Generate sample healthcare metrics"""
    metrics = {
        "generated_at": datetime.now().isoformat(),
        "total_relationships": 2000,
        "active_providers": 150,
        "specialties": [
            {"name": "Cardiology", "count": 45, "satisfaction": 4.8},
            {"name": "Neurology", "count": 38, "satisfaction": 4.7},
            {"name": "Oncology", "count": 32, "satisfaction": 4.9},
            {"name": "Pediatrics", "count": 35, "satisfaction": 4.6}
        ],
        "daily_stats": []
    }
    
    # Generate 30 days of historical data
    for i in range(30):
        date = datetime.now() - timedelta(days=29-i)
        metrics["daily_stats"].append({
            "date": date.strftime("%Y-%m-%d"),
            "relationships": random.randint(1800, 2200),
            "response_time": round(random.uniform(0.5, 2.5), 2),
            "satisfaction": round(random.uniform(4.3, 4.9), 2)
        })
    
    return metrics

def generate_ai_insights():
    """Generate AI model insights"""
    return {
        "model_version": "Phoenix-Voltage-v2.4",
        "accuracy": 0.94,
        "last_training": datetime.now().isoformat(),
        "insights": [
            "Patient engagement increased 12% this week",
            "Response times improved by 8% across all specialties",
            "New capability: Real-time symptom analysis deployed"
        ]
    }

def main():
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    # Generate and save metrics
    metrics = generate_health_metrics()
    with open('data/health_metrics.json', 'w') as f:
        json.dump(metrics, f, indent=2)
    
    # Generate and save AI insights
    insights = generate_ai_insights()
    with open('data/ai_insights.json', 'w') as f:
        json.dump(insights, f, indent=2)
    
    print("✅ Generated health metrics and AI insights")
    print(f"📊 Total relationships: {metrics['total_relationships']}")
    print(f"🤖 Model accuracy: {insights['accuracy']}")

if __name__ == "__main__":
    main()
