import './Deliveries.css'

function Deliveries() {
  const deliveries = [
  {
    id: "ORD-10234",
    driver: "Rajesh Kumar",
    route: "Mumbai → Pune",
    status: "In Transit",
    eta: "2h 15m",
    co2Saved: "18 kg",
    progress: 65,
  },
  {
    id: "ORD-10235",
    driver: "Priya Verma",
    route: "Delhi → Jaipur",
    status: "Delivered",
    eta: "Completed",
    co2Saved: "22 kg",
    progress: 100,
  },
  {
    id: "ORD-10236",
    driver: "Amit Sharma",
    route: "Ahmedabad → Surat",
    status: "Delayed",
    eta: "45m delay",
    co2Saved: "11 kg",
    progress: 40,
  },
  {
    id: "ORD-10237",
    driver: "Neha Patel",
    route: "Lucknow → Kanpur",
    status: "In Transit",
    eta: "1h 05m",
    co2Saved: "15 kg",
    progress: 72,
  },
];

  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Deliveries</h1>
        <div className="top-actions">
          <input type="text" className="search-box" placeholder="🔍 Search deliveries..." />
          <button className="action-btn">📅 View Calendar</button>
          <button className="action-btn primary">+ New Delivery</button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-green">📦</div>
            <div className="stat-label">Total Deliveries</div>
            <div className="stat-value">247</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">🚀</div>
            <div className="stat-label">In Transit</div>
            <div className="stat-value">84</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">⏰</div>
            <div className="stat-label">On-Time Rate</div>
            <div className="stat-value">94.2%</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-purple">🌱</div>
            <div className="stat-label">CO₂ Saved</div>
            <div className="stat-value">127 kg</div>
          </div>
        </div>
        <div className="delivery-grid">
  {deliveries.map((delivery) => (
    <div className="delivery-card" key={delivery.id}>

      <div className="delivery-header">
        <div>
          <h3>{delivery.id}</h3>
          <p>{delivery.route}</p>
        </div>

        <span
          className={
            delivery.status === "Delivered"
              ? "delivery-status delivered"
              : delivery.status === "Delayed"
              ? "delivery-status delayed"
              : "delivery-status transit"
          }
        >
          {delivery.status}
        </span>
      </div>

      <div className="delivery-body">
        <div className="delivery-metrics">
          <div>
            <span className="metric-label">Driver</span>
            <span className="metric-value">
              {delivery.driver}
            </span>
          </div>

          <div>
            <span className="metric-label">ETA</span>
            <span className="metric-value">
              {delivery.eta}
            </span>
          </div>

          <div>
            <span className="metric-label">CO₂ Saved</span>
            <span className="metric-value green">
              {delivery.co2Saved}
            </span>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${delivery.progress}%` }}
          ></div>
        </div>
      </div>

    </div>
  ))}
</div>

      </div>
    </>
  )
}

export default Deliveries
