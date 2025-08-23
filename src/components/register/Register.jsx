
import { useState } from "react";
import "./register.css";

const Register = ({ onRegister, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    onRegister({ username, email, password });
  };

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">OrderApp</h1>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Repetir contraseña:</label>
            <input
              type="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <a
            href="#" onClick={(e) => {
              e.preventDefault();
              onSwitchToLogin();
            }}
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
