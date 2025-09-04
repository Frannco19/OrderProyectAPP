import { useState } from "react";
import "./EmployeesForm.css";

export default function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Empleado");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Completa Nombre y Contraseña");
      return;
    }

    onSubmit?.({ name, email, role });
    console.log("Empleado creado: ", { name, password, role });
  };

  return (
      <section>
        <h2>Nuevo empleado</h2>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Nombre
            <input
              type="text"
              value={name} // controlado
              className="input-form"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password} // controlado
              className="input-form"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Rol
            <select
              value={role} // controlado
              className="input-form"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Empleado">Empleado</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <button type="submit">Guardar</button>
        </form>
      </section>
    );
}
