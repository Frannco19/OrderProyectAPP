import { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import DashboardContainer from "./components/Dashboard/dashboardContainer/DashboardContainer";
import DashboardNav from "./components/Dashboard/navbarDashboard/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("login");

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <BrowserRouter>
      <DashboardContainer />
    </BrowserRouter>
    // <AuthForm
    //   mode={mode}
    //   onSubmit={handleSubmit}
    //   onSwitch={() => setMode(mode === "login" ? "register" : "login")}
    // />
  );
}

export default App;