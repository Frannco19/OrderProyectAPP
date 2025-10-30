import React, { useState } from 'react'
import Sidebar from '../sidebarDashboard/Sidebar'                     // <- importa Sidebar correcto
import OrderItem from '../orderItem/OrderItem'
import styles from './DashboardContainer.module.css'
import { Routes, Route } from 'react-router-dom'
import BranchItem from '../Branchs/branchItem/BranchItem'
import BranchContainer from '../Branchs/branchesContainer/branchContainer'
import EmployeesPage from '../Employees/employeesPage'
import EmployeeForm from '../Employees/EmployeesForm/EmployeesForm'
import { Home, Users, ShoppingBag, Store, Utensils } from 'lucide-react'

const LINKS = [
  { to: '/admin',        label: 'Inicio',       icon: Home },
  { to: '/admin/orders', label: 'Pedidos', icon: ShoppingBag },
  { to: '/admin/branches',       label: 'Sucursales',       icon: Store },
  { to: '/admin/menu',     label: 'Menu',     icon: Utensils },
  { to: '/admin/employees',     label: 'Empleados',     icon: Users },
]

const DashboardContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.layout}>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        LINKS={LINKS}
        logoSrc="https://merakiui.com/images/logo.svg"
        brandText="OrderApp"
      />

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