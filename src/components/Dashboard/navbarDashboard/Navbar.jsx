import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, ShoppingBag, Store, Utensils } from "lucide-react";
import "./Navbar.css";

const LINKS = [
  { to: "/admin", label: "Inicio", icon: Home },
  { to: "/admin/orders", label: "Pedidos", icon: ShoppingBag },
  { to: "/admin/branches", label: "Sucursales", icon: Store },
  { to: "/admin/menu", label: "Menú", icon: Utensils },
];

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`} aria-label="Sidebar">
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(o => !o)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className="nav-links">
        <div className="brand">
          {isOpen && <h2 className="brand-text">OrderApp</h2>}
        </div>

        {LINKS.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className="link" title={label} end={to === "/admin"}>
            <Icon className="link-icon" size={20} />
            {isOpen && <span className="link-text">{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
