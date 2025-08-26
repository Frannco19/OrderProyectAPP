import React from 'react'
import DashboardNav from '../navbarDashboard/Navbar'
import OrderItem from '../orderItem/OrderItem'
import "./DashboardContainer.css"
import { Routes, Route } from "react-router-dom";
import BranchItem from '../branchItem/branchItem';

const DashboardContainer = () => {
  return (
    <div className="layout">
      <DashboardNav />
      <main className="content">
        <h1>Dashboard</h1>
          <Routes>
          {/* Ruta Inicio */}
          <Route path="/admin" element={<h2>Inicio</h2>} />

          {/* Ruta Pedidos */}
          <Route path="/admin/orders" element={<OrderItem />} />

          {/* Ruta Sucursales */}
          <Route path="/admin/branches" element={<BranchItem/>} />

          {/* Ruta Menú */}
          <Route path="/admin/menu" element={<h2>Menú</h2>} />
        </Routes>
      </main>
      
    </div>
  )
}

export default DashboardContainer
