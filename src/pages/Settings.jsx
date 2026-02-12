import './Settings.css'

function Settings() {
  return (
    <>
      <div className="top-bar">
        <h1 className="page-title">Settings</h1>
        <div className="top-actions">
          <button className="action-btn">📥 Import Settings</button>
          <button className="action-btn primary">💾 Save Changes</button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="settings-nav">
          <button className="settings-tab active">⚙️ General</button>
          <button className="settings-tab">🔔 Notifications</button>
          <button className="settings-tab">🔌 Integrations</button>
          <button className="settings-tab">👥 Team</button>
          <button className="settings-tab">💳 Billing</button>
          <button className="settings-tab">🔐 Security</button>
        </div>
        <div className="settings-grid">

  {/* General Settings */}
  <div className="settings-card">
    <h3>Company Preferences</h3>

    <div className="form-group">
      <label>Company Name</label>
      <input type="text" defaultValue="Eco-Route Logistics Pvt Ltd" />
    </div>

    <div className="form-group">
      <label>Default Fuel Type</label>
      <select defaultValue="Diesel">
        <option>Diesel</option>
        <option>Electric</option>
        <option>CNG</option>
      </select>
    </div>

    <div className="form-group">
      <label>CO₂ Reporting Unit</label>
      <select defaultValue="Tons">
        <option>Tons</option>
        <option>Kilograms</option>
      </select>
    </div>
  </div>

  {/* Notifications */}
  <div className="settings-card">
    <h3>Notifications</h3>

    <div className="toggle-row">
      <span>Maintenance Alerts</span>
      <input type="checkbox" defaultChecked />
    </div>

    <div className="toggle-row">
      <span>Driver Performance Alerts</span>
      <input type="checkbox" defaultChecked />
    </div>

    <div className="toggle-row">
      <span>Monthly ESG Report Emails</span>
      <input type="checkbox" />
    </div>
  </div>

  {/* Team Management */}
  <div className="settings-card">
    <h3>Team Management</h3>

    <div className="team-member">
      <span>Rajesh Kumar</span>
      <span className="role-badge">Admin</span>
    </div>

    <div className="team-member">
      <span>Priya Verma</span>
      <span className="role-badge">Operations</span>
    </div>

    <div className="team-member">
      <span>Amit Sharma</span>
      <span className="role-badge">Fleet Manager</span>
    </div>

    <button className="action-btn">+ Add Team Member</button>
  </div>

  {/* Security */}
  <div className="settings-card">
    <h3>Security</h3>

    <div className="toggle-row">
      <span>Two-Factor Authentication</span>
      <input type="checkbox" defaultChecked />
    </div>

    <div className="toggle-row">
      <span>Session Timeout (30 mins)</span>
      <input type="checkbox" />
    </div>

    <button className="action-btn">Reset Password</button>
  </div>

</div>

      </div>
    </>
  )
}

export default Settings
