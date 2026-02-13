import './ESGReports.css'

function ESGReports() {
  const esgData = {
  totalCO2Saved: "124.8 tons",
  renewableUsage: 68,
  complianceScore: 91,
  annualGoal: 73,
};

const complianceStandards = [
  { name: "GRI Compliance", status: "Certified" },
  { name: "CDP Disclosure", status: "Submitted" },
  { name: "SASB Reporting", status: "In Progress" },
];

  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">ESG Reports & Compliance</h1>
        <div className="top-actions">
          <button className="action-btn">📧 Schedule Report</button>
          <button className="action-btn">💾 Save Template</button>
          <button className="action-btn primary">📥 Export All</button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-green">🌱</div>
            <div className="stat-label">Total CO₂ Reduced</div>
            <div className="stat-value">24.7 tons</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-blue">⛽</div>
            <div className="stat-label">Fuel Saved</div>
            <div className="stat-value">8,940 L</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-orange">💰</div>
            <div className="stat-label">Cost Savings</div>
            <div className="stat-value">₹4.8L</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-purple">📊</div>
            <div className="stat-label">Routes Optimized</div>
            <div className="stat-value">1,847</div>
          </div>
        </div>
        <div className="esg-grid">

  <div className="esg-card">
    <h3>Total CO₂ Saved</h3>
    <p className="esg-value green">
      {esgData.totalCO2Saved}
    </p>
  </div>

  <div className="esg-card">
    <h3>Renewable Energy Usage</h3>
    <p className="esg-value">
      {esgData.renewableUsage}%
    </p>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${esgData.renewableUsage}%` }}
      ></div>
    </div>
  </div>

  <div className="esg-card">
    <h3>Compliance Score</h3>
    <p className="esg-value">
      {esgData.complianceScore}/100
    </p>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${esgData.complianceScore}%` }}
      ></div>
    </div>
  </div>

  <div className="esg-card">
    <h3>Annual Sustainability Goal</h3>
    <p className="esg-value">
      {esgData.annualGoal}%
    </p>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${esgData.annualGoal}%` }}
      ></div>
    </div>
  </div>

</div>

<div className="compliance-section">
  <h2>🌍 Compliance Standards</h2>

  <div className="compliance-grid">
    {complianceStandards.map((item, index) => (
      <div className="compliance-card" key={index}>
        <h4>{item.name}</h4>
        <span className="compliance-status">
          {item.status}
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </>
  )
}

export default ESGReports
