import { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  const [mode, setMode] = useState("login");

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <AuthForm
      mode={mode}
      onSubmit={handleSubmit}
      onSwitch={() => setMode(mode === "login" ? "register" : "login")}
    />
  );
}

export default App;