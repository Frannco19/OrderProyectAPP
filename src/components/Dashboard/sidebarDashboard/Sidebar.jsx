import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // o tus íconos
import styles from "./Sidebar.module.css";

export default function Sidebar({
  isOpen,
  setIsOpen,
  LINKS,            // [{ to, label, icon: Icon }]
  logoSrc,          // opcional: url del logo
  brandText = "OrderApp",
}) {
  return (
    <aside
  className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
  aria-label="Sidebar"
  data-open={isOpen}    
>
  <button
    type="button"
    className={styles["menu-toggle"]}
    onClick={() => setIsOpen(o => !o)}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    title={isOpen ? "Cerrar" : "Abrir"}
  >
    {isOpen ? <X size={18} /> : <Menu size={18} />}
  </button>

  {/* HEADER arriba (logo / marca) */}
  <div className={styles.brandTop}>
    {/* {logoSrc ? (
      <img src={logoSrc} alt={brandText} className={styles["brand-img"]} />
    ) : (
      isOpen && <h2 className={styles["brand-text"]}>{brandText}</h2>
    )} */}
  </div>

  {/* LINKS (solo enlaces) */}
  <nav className={styles["nav-links"]}>
    {LINKS.map(({ to, label, icon: Icon }) => (
      <NavLink key={to} to={to} className={styles.link} title={label} end>
        <Icon className={styles["link-icon"]} />
        {isOpen && <span className={styles["link-text"]}>{label}</span>}
      </NavLink>
    ))}
  </nav>

  {/* FOOTER abajo */}
  <div className={styles.footer}>
    <a href="#">
      <img
        className={styles.avatar}
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=100&w=160&h=160&fit=facearea&facepad=4"
        alt="Perfil"
      />
    </a>
  </div>
</aside>

  );
}
