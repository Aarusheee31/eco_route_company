import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Dashboard</h1>
        <div className="top-actions">
          <div className="live-indicator">
            <div className="live-dot"></div>
            <span>Live Updates</span>
          </div>
          <button className="action-btn">🔔 Notifications (3)</button>
          <button className="action-btn primary">+ New Route</button>
        </div>
      </div>

      <div className="content-wrapper">
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-green">🚛</div>
            <div className="stat-label">Active Vehicles</div>
            <div className="stat-value">47</div>
            <div className="stat-change">↑ 8 from yesterday</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">🌱</div>
            <div className="stat-label">CO₂ Saved Today</div>
            <div className="stat-value">127 kg</div>
            <div className="stat-change">↑ 22% vs yesterday</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">📦</div>
            <div className="stat-label">Active Deliveries</div>
            <div className="stat-value">84</div>
            <div className="stat-change">12 completed today</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-purple">💰</div>
            <div className="stat-label">Fuel Savings</div>
            <div className="stat-value">₹8,420</div>
            <div className="stat-change">↑ 18% vs yesterday</div>
          </div>
        </div>

        
        <div className="dashboard-grid">
          
          <div className="map-section">
            <div className="map-header">
              <h2 className="map-title"> Live Fleet Map</h2>
              <div className="map-filters">
                <button className="filter-chip active">All Routes</button>
              </div>
            </div>
            <div className="map-view">
              <div className="route-marker" style={{top: '20%', left: '25%'}}>🚚</div>
              <div className="route-marker" style={{top: '35%', left: '45%'}}>🚛</div>
              <div className="route-marker" style={{top: '60%', left: '30%'}}>🚐</div>
              <div className="route-marker" style={{top: '70%', left: '60%'}}>⚡</div>
              <div className="route-marker" style={{top: '45%', left: '70%'}}>🚚</div>
            </div>
          </div>

          
          <div className="routes-panel">
            <div className="panel-header">
              <h2 className="panel-title">Active Routes</h2>
            </div>
            <div className="routes-list">
              <div className="route-item">
                <div className="route-item-header">
                  <span className="route-name">Mumbai → Pune</span>
                  <span className="route-status">ECO</span>
                </div>
                <div className="route-details">
                  Driver: Rajesh Kumar<br/>
                  Vehicle: DL-12-AB-5678
                  <div className="route-metric">
                    <span className="metric-label">Progress:</span>
                    <span className="metric-value">67%</span>
                  </div>
                  <div className="route-metric">
                    <span className="metric-label">CO₂ Saved:</span>
                    <span className="metric-value">7.2 kg</span>
                  </div>
                </div>
              </div>

              <div className="route-item">
                <div className="route-item-header">
                  <span className="route-name">Delhi → Jaipur</span>
                  <span className="route-status">ECO</span>
                </div>
                <div className="route-details">
                  Driver: Amit Sharma<br/>
                  Vehicle: HR-14-CD-9012
                  <div className="route-metric">
                    <span className="metric-label">Progress:</span>
                    <span className="metric-value">42%</span>
                  </div>
                  <div className="route-metric">
                    <span className="metric-label">CO₂ Saved:</span>
                    <span className="metric-value">12.4 kg</span>
                  </div>
                </div>
              </div>

              <div className="route-item">
                <div className="route-item-header">
                  <span className="route-name">Bangalore → Chennai</span>
                  <span className="route-status">ECO</span>
                </div>
                <div className="route-details">
                  Driver: Vikram Kumar<br/>
                  Vehicle: HR-05-GH-7890
                  <div className="route-metric">
                    <span className="metric-label">Progress:</span>
                    <span className="metric-value">89%</span>
                  </div>
                  <div className="route-metric">
                    <span className="metric-label">CO₂ Saved:</span>
                    <span className="metric-value">5.3 kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed & Quick Actions */}
        <div className="dashboard-grid">
          <div className="activity-section">
            <div className="activity-header">
              <h2 className="activity-title"> Recent Activity</h2>
              <button className="action-btn">View All</button>
            </div>
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon green">✅</div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>Delivery Completed</strong> - Mumbai → Pune route finished with <strong>8.2 kg CO₂ savings</strong>
                  </div>
                  <div className="activity-time">2 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon blue">🚛</div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>New Route Started</strong> - Delhi → Agra with estimated 14.1 kg savings
                  </div>
                  <div className="activity-time">15 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon orange">⚠️</div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>Traffic Alert</strong> - Heavy congestion on NH-48, rerouting suggested
                  </div>
                  <div className="activity-time">28 minutes ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <div className="activity-header">
              <h2 className="activity-title"> Quick Actions</h2>
            </div>
            <div className="actions-grid">
              <div className="action-card">
                <div className="action-icon">🗺️</div>
                <div className="action-label">Plan Route</div>
              </div>
              <div className="action-card">
                <div className="action-icon">🚛</div>
                <div className="action-label">Add Vehicle</div>
              </div>
              <div className="action-card">
                <div className="action-icon">👤</div>
                <div className="action-label">Add Driver</div>
              </div>
              <div className="action-card">
                <div className="action-icon">📦</div>
                <div className="action-label">New Delivery</div>
              </div>
              <div className="action-card">
                <div className="action-icon">📊</div>
                <div className="action-label">View Reports</div>
              </div>
              <div className="action-card">
                <div className="action-icon">⚙️</div>
                <div className="action-label">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
