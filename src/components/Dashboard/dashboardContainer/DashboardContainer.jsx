import React from 'react'
import DashboardNav from '../navbarDashboard/Navbar'
import OrderItem from '../orderItem/OrderItem'
import styles from './DashboardContainer.module.css'   // <— NUEVO
import { Routes, Route } from 'react-router-dom'
import BranchItem from '../Branchs/branchItem/BranchItem'
import BranchContainer from '../Branchs/branchesContainer/branchContainer'
import EmployeesPage from '../Employees/employeesPage'
import EmployeeForm from '../Employees/EmployeesForm/EmployeesForm'

const DashboardContainer = () => {
  return (
    <div className={styles.layout}>
      {/* Si querés forzar ancho fijo al nav: <aside className={styles.sidebar}> */}
      <DashboardNav />
      {/* </aside> */}

      <main className={styles.content}>
        <h1 className={styles.title}>Dashboard</h1>

        <Routes>
          {/* Ruta Inicio */}
          <Route index element={<h2>Inicio</h2>} />

          {/* Ruta Pedidos */}
          <Route path="orders" element={<OrderItem />} />

          {/* Ruta Sucursales */}
          <Route path="branches" element={<BranchContainer />} />

          {/* Ruta Menú */}
          <Route path="menu" element={<h2>Menú</h2>} />

          {/* Empleados */}
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="employees/new" element={<EmployeeForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default DashboardContainer
