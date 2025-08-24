import React from 'react'
import DashboardNav from '../navbarDashboard/Navbar'

const DashboardContainer = () => {
  return (
    <div className="layout">
      <DashboardNav />
      <main className="content">
        {/* tu contenido del dashboard */}
        <h1>Dashboard</h1>
      </main>
    </div>
  )
}

export default DashboardContainer
