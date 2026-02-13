import './Analytics.css'

function Analytics() {
  const analyticsStats = {
    avgPayloadUtilization: 82,
    reroutingEfficiency: 91,
    fuelOptimization: 17,
    monthlyGrowth: 12,
  };
  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Analytics & Insights</h1>
        <div className="top-actions">
          <span className="date-range"> Jan 1 - Feb 11, 2026</span>
          <button className="action-btn">🔄 Refresh </button>
          <button className="action-btn primary"> Export Report</button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-green">🌱</div>
            <div className="stat-label">CO₂ Saved This Month</div>
            <div className="stat-value">3.2 tons</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">💰</div>
            <div className="stat-label">Fuel Cost Savings</div>
            <div className="stat-value">₹62,450</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">🚛</div>
            <div className="stat-label">Active Routes</div>
            <div className="stat-value">247</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-purple">⚡</div>
            <div className="stat-label">Eco-Route Adoption</div>
            <div className="stat-value">89%</div>
          </div>
        </div>

        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Payload Utilization</div>
            <div className="stat-value">
              {analyticsStats.avgPayloadUtilization}%
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Traffic Rerouting Efficiency</div>
            <div className="stat-value">
              {analyticsStats.reroutingEfficiency}%
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Fuel Optimization</div>
            <div className="stat-value">
              {analyticsStats.fuelOptimization}% Improved
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Monthly Performance Growth</div>
            <div className="stat-value">
              +{analyticsStats.monthlyGrowth}%
            </div>
          </div>
        </div>

        
        <div className="analytics-grid">

          <div className="analytics-card">
            <h3>CO₂ Emissions Trend</h3>
            <div className="dummy-chart">
    <div className="trend-row">
      <span>Week 1</span>
      <div className="trend-bar" style={{ width: "70%" }}></div>
      <span>4.2 tons</span>
    </div>

    <div className="trend-row">
      <span>Week 2</span>
      <div className="trend-bar" style={{ width: "55%" }}></div>
      <span>3.6 tons</span>
    </div>

    <div className="trend-row">
      <span>Week 3</span>
      <div className="trend-bar" style={{ width: "48%" }}></div>
      <span>3.1 tons</span>
    </div>

    <div className="trend-row">
      <span>Week 4</span>
      <div className="trend-bar" style={{ width: "35%" }}></div>
      <span>2.4 tons</span>
    </div>
  </div>
          </div>

          <div className="analytics-card">
            <h3>Route Optimization Impact</h3>
            <div className="dummy-chart">
    <div className="trend-row">
      <span>Fuel Saved</span>
      <div className="trend-bar green" style={{ width: "80%" }}></div>
      <span>18%</span>
    </div>

    <div className="trend-row">
      <span>Distance Reduced</span>
      <div className="trend-bar green" style={{ width: "65%" }}></div>
      <span>14%</span>
    </div>

    <div className="trend-row">
      <span>Time Saved</span>
      <div className="trend-bar green" style={{ width: "72%" }}></div>
      <span>16%</span>
    </div>
  </div>
          </div>

          <div className="analytics-card">
            <h3>Fuel Consumption Analysis</h3>
            <div className="dummy-chart">
    <div className="trend-row">
      <span>Diesel</span>
      <div className="trend-bar orange" style={{ width: "75%" }}></div>
      <span>62%</span>
    </div>

    <div className="trend-row">
      <span>Electric</span>
      <div className="trend-bar blue" style={{ width: "45%" }}></div>
      <span>28%</span>
    </div>

    <div className="trend-row">
      <span>CNG</span>
      <div className="trend-bar purple" style={{ width: "30%" }}></div>
      <span>10%</span>
    </div>
  </div>
          </div>

          <div className="analytics-card">
            <h3>Vehicle Performance Comparison</h3>
            <div className="dummy-chart">
    <div className="trend-row">
      <span>Truck A</span>
      <div className="trend-bar" style={{ width: "92%" }}></div>
      <span>92/100</span>
    </div>

    <div className="trend-row">
      <span>Truck B</span>
      <div className="trend-bar" style={{ width: "85%" }}></div>
      <span>85/100</span>
    </div>

    <div className="trend-row">
      <span>Van C</span>
      <div className="trend-bar" style={{ width: "88%" }}></div>
      <span>88/100</span>
    </div>
  </div>
          </div>
          </div>
      </div>

    </>
  )
}

export default Analytics
