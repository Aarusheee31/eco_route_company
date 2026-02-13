import './Drivers.css'

function Drivers() {
  const drivers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    vehicle: "UP-12-AB-5678",
    ecoScore: 92,
    deliveries: 148,
    fuelEfficiency: "18.2 km/L",
    co2Saved: "420 kg",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Verma",
    vehicle: "HR-01-EF-3456",
    ecoScore: 95,
    deliveries: 164,
    fuelEfficiency: "21.3 km/L",
    co2Saved: "510 kg",
    status: "Top Performer",
  },
  {
    id: 3,
    name: "Amit Sharma",
    vehicle: "DL-08-KL-4567",
    ecoScore: 85,
    deliveries: 132,
    fuelEfficiency: "17.4 km/L",
    co2Saved: "356 kg",
    status: "Active",
  },
  {
    id: 4,
    name: "Vikram Singh",
    vehicle: "HR-05-GH-7890",
    ecoScore: 78,
    deliveries: 120,
    fuelEfficiency: "15.9 km/L",
    co2Saved: "290 kg",
    status: "Needs Improvement",
  },
];

  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Drivers</h1>
        <div className="top-actions">
          <input type="text" className="search-box" placeholder="🔍 Search drivers..." />
          <button className="action-btn">📊 Export Performance</button>
          <button className="action-btn primary">+ Add Driver</button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-green">👥</div>
            <div className="stat-label">Total Drivers</div>
            <div className="stat-value">48</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">🌱</div>
            <div className="stat-label">Avg. Eco Score</div>
            <div className="stat-value">87/100</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">🎓</div>
            <div className="stat-label">Training Completed</div>
            <div className="stat-value">38</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-purple">🏆</div>
            <div className="stat-label">Total CO₂ Saved</div>
            <div className="stat-value">24.7 tons</div>
          </div>
        </div>
        <div className="driver-grid">
  {drivers.map((driver) => (
    <div className="driver-card" key={driver.id}>

      <div className="driver-header">
        <div>
          <h3>{driver.name}</h3>
          <p>{driver.vehicle}</p>
        </div>

        <span className="driver-status">
          {driver.status}
        </span>
      </div>

      <div className="driver-metrics">
        <div>
          <span className="metric-label">Eco Score</span>
          <span className="metric-value green">
            {driver.ecoScore}/100
          </span>
        </div>

        <div>
          <span className="metric-label">Deliveries</span>
          <span className="metric-value">
            {driver.deliveries}
          </span>
        </div>

        <div>
          <span className="metric-label">Fuel Efficiency</span>
          <span className="metric-value">
            {driver.fuelEfficiency}
          </span>
        </div>

        <div>
          <span className="metric-label">CO₂ Saved</span>
          <span className="metric-value green">
            {driver.co2Saved}
          </span>
        </div>
      </div>

      <div className="eco-bar">
        <div
          className="eco-fill"
          style={{ width: `${driver.ecoScore}%` }}
        ></div>
      </div>

    </div>
  ))}
</div>

      </div>
    </>
  )
}

export default Drivers
