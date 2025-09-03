import { NavLink } from "react-router-dom";

export default function EmployeesPage() {
  return (
    <section>
      <header className="page-header">
        <h2>Empleados</h2>
        <NavLink to="new" className="btn-primary">
          Nuevo Empleado
        </NavLink>
      </header>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th style={{ width: 160 }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Por ahora no hay datos; dejamos un estado vacío claro */}
          <tr>
            <td colSpan="4" style={{ textAlign: "center", padding: "1rem" }}>
              No hay empleados aún.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
