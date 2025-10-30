import { useState } from "react";
import styles from "./AuthForm.module.css";

function AuthForm({ mode = "login", onSubmit, onSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");

  const isRegister = mode === "register";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isRegister && password !== repassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    onSubmit(
      isRegister ? { username, email, password } : { username, password }
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          
          {/* Logo */}
          <div className={styles.logoWrap}>
            {/* <img
              className={styles.logo}
              src="https://merakiui.com/images/logo.svg"
              alt="OrderApp"
            /> */}
            <h1 className={styles.logo} >OrderApp</h1>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (mode !== "login") onSwitch?.();
              }}
              className={`${styles.tab} ${!isRegister ? styles.active : ""}`}
            >
              Iniciar sesión
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (mode !== "register") onSwitch?.();
              }}
              className={`${styles.tab} ${isRegister ? styles.active : ""}`}
            >
              Registrarse
            </a>
          </div>

          {/* Usuario */}
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className={styles.input}
            />
          </div>

          {/* Email (solo registro) */}
          {isRegister && (
            <div className={styles.field}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className={styles.input}
              />
            </div>
          )}

          {/* Contraseña */}
          <div className={styles.field}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={isRegister ? "new-password" : "current-password"}
              className={styles.input}
            />
          </div>

          {/* Repetir contraseña (solo registro) */}
          {isRegister && (
            <div className={styles.field}>
              <input
                type="password"
                placeholder="Repetir contraseña"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                required
                autoComplete="new-password"
                className={styles.input}
              />
            </div>
          )}

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.actions}>
            <button type="submit" className={styles.submitBtn}>
              {isRegister ? "Registrarse" : "Ingresar"}
            </button>

            <div className={styles.switchRow}>
              <a
                href="#"
                className={styles.switchLink}
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch?.();
                }}
              >
                {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes cuenta?"}
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
