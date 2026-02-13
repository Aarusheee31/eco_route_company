import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/',  label: 'Dashboard' },
    
    { path: '/plan-route', label: 'Plan Route' }, 
    { path: '/fleet',  label: 'Fleet Management' },
    { path: '/drivers',  label: 'Drivers' },
    { path: '/deliveries',  label: 'Deliveries' },
    { path: '/esg-reports',  label: 'ESG Reports' },
    { path: '/analytics',  label: 'Analytics' },
    { path: '/settings',  label: 'Settings' },
  ];

  return (
    <aside className="sidebar-nav">
      <div className="company-header">
        <div className="company-logo"> Eco-Route</div>
        <div className="company-name">Sustainable Transport Solutions</div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;