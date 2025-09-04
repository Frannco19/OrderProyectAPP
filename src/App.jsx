// App.jsx
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import DashboardContainer from "./components/Dashboard/dashboardContainer/DashboardContainer";

// Página de Login: onSwitch → /register, onSubmit → /admin
function LoginPage() {
  const navigate = useNavigate();
  return (
    <AuthForm
      mode="login"
      onSubmit={() => navigate("/admin", { replace: true })}
      onSwitch={() => navigate("/register")}
    />
  );
}

// Página de Registro: onSwitch → /login
function RegisterPage() {
  const navigate = useNavigate();
  return (
    <AuthForm
      mode="register"
      onSubmit={(data) => {
        console.log("Registro:", data);
        navigate("/login");
      }}
      onSwitch={() => navigate("/login")}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<DashboardContainer />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
