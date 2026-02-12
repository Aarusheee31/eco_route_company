import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default Layout
