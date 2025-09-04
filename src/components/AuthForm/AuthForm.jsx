import { useState } from "react";
import styles from "./AuthForm.module.css";

function AuthForm({ mode = "login", onSubmit, onSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (mode === "register" && password !== repassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    onSubmit(
      mode === "login"
        ? { username, password }
        : { username, email, password }
    );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.appName}>OrderApp</h1>
          <p className={styles.subtitle}>
            {mode === "login" ? "Iniciar sesión" : "Crear una cuenta"}
          </p>
        </header>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label className="label">Usuario</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          {mode === "register" && (
            <div className={styles.row}>
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
          )}

          <div className={styles.row}>
            <label className="label">Contraseña</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </div>

          {mode === "register" && (
            <div className={styles.row}>
              <label className="label">Repetir contraseña</label>
              <input
                className="input"
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
          )}

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.actions}>
            <button type="submit" className="btn">
              {mode === "login" ? "Ingresar" : "Registrarse"}
            </button>

            <p className={styles.switch}>
              {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}{" "}
              <a
                href="#"
                className="muted-link"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch?.();
                }}
              >
                {mode === "login" ? "Regístrate" : "Inicia sesión"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
