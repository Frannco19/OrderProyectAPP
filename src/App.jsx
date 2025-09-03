import { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import DashboardContainer from "./components/Dashboard/dashboardContainer/DashboardContainer";
import DashboardNav from "./components/Dashboard/navbarDashboard/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("login");

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<DashboardContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;