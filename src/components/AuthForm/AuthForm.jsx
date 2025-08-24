import { useState } from "react";
import "./AuthForm.css";

function AuthForm({ mode = "login", onSubmit, onSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "register" && password !== repassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    onSubmit(
      mode === "login"
        ? { username, password }
        : { username, email, password }
    );
  };

  return (
    <div className="auth-container">
      <h1 className="title">OrderApp</h1>
      <h2>{mode === "login" ? "Iniciar Sesión" : "Registro"}</h2>

      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: "10px"}}>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {mode === "register" && (
          <div style={{marginBottom: "10px"}}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}

        <div style={{marginBottom: "10px"}}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === "register" && (
          <div style={{marginBottom: "10px"}}>
            <label>Repetir contraseña:</label>
            <input
              type="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">
          {mode === "login" ? "Ingresar" : "Registrarse"}
        </button>
      </form>

      <p>
        {mode === "login"
          ? "¿No tienes cuenta?"
          : "¿Ya tienes una cuenta?"}{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); onSwitch(); }}>
          {mode === "login" ? "Registrate" : "Inicia sesión"}
        </a>
      </p>
    </div>
  );
}

export default AuthForm;
