import './FleetManagement.css'

function FleetManagement() {
  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Fleet Management</h1>
        <div className="top-actions">
          <input type="text" className="search-box" placeholder="🔍 Search vehicles..." />
          <button className="action-btn">🔧 Maintenance Schedule</button>
          <button className="action-btn primary">+ Add Vehicle</button>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="fleet-stats">
          <div className="stat-card">
            <div className="stat-icon stat-green">🚛</div>
            <div className="stat-label">Total Vehicles</div>
            <div className="stat-value">52</div>
            <div className="stat-subtitle">47 active, 3 idle, 2 in service</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">⛽</div>
            <div className="stat-label">Avg. Fuel Efficiency</div>
            <div className="stat-value">18.4 km/L</div>
            <div className="stat-subtitle">↑ 12% vs last month</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">🔧</div>
            <div className="stat-label">Maintenance Due</div>
            <div className="stat-value">7</div>
            <div className="stat-subtitle">2 urgent, 5 scheduled</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-green">🌱</div>
            <div className="stat-label">Fleet Eco Score</div>
            <div className="stat-value">87/100</div>
            <div className="stat-subtitle">↑ 5 points this month</div>
          </div>
        </div>

        <div className="filter-tabs">
          <button className="filter-tab active">All Vehicles (52)</button>
          <button className="filter-tab">Heavy Duty Diesel (24)</button>
          <button className="filter-tab">Light Commercial (18)</button>
          <button className="filter-tab">Electric (10)</button>
        </div>

        <div className="vehicle-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="vehicle-card">
              <div className="vehicle-header">
                <div className="vehicle-id">
                  <div className="vehicle-icon">🚚</div>
                  <div className="vehicle-info">
                    <h3>MH-12-AB-567{i}</h3>
                    <p>Heavy Duty Diesel</p>
                  </div>
                </div>
                <span className="vehicle-status status-active">Active</span>
              </div>
              <div className="vehicle-body">
                <div className="vehicle-metrics">
                  <div className="metric-item">
                    <div className="metric-label">Total Distance</div>
                    <div className="metric-value">24,840 km</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">CO₂ Saved</div>
                    <div className="metric-value green">847 kg</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Fuel Efficiency</div>
                    <div className="metric-value">16.8 km/L</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Current Load</div>
                    <div className="metric-value">8.2 tons</div>
                  </div>
                </div>
                <div className="eco-score-bar">
                  <div className="score-label">
                    <span>Eco Score</span>
                    <span style={{color: '#00c853'}}>92/100</span>
                  </div>
                  <div className="score-progress">
                    <div className="score-fill" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="vehicle-actions">
                  <button className="vehicle-action-btn">📍 Track</button>
                  <button className="vehicle-action-btn">📊 Stats</button>
                  <button className="vehicle-action-btn">✏️ Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FleetManagement
