import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import ProtectedRoute from "./componets/ProtectedRoute";
import HomePage from "./pages/Home/HomePage";
import Equipo from "./pages/Equipo/Equipo";
import Crud from "./pages/crud/crud";
import Altas from "./pages/crud/Altas";
import Consultas from "./pages/crud/Consultas";
import Actualizaciones from "./pages/crud/Actualizaciones";
import Eliminacion from "./pages/crud/Eliminacion";

import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import { AuthProvider } from "./context/AuthContext";

function Layout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas con MainLayout */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Equipo" element={
              <ProtectedRoute>
              <Equipo />
              </ProtectedRoute>}/>
            <Route path="/crud" element={
              <ProtectedRoute>
              <Crud />
              </ProtectedRoute>}/>
            <Route path="/crud/Altas" element={    
              <ProtectedRoute>
                  <Altas />
              </ProtectedRoute>} />
            <Route path="/crud/Consultas" element={   
               <ProtectedRoute>
                  <Consultas />
               </ProtectedRoute>} />
            <Route path="/crud/Actualizaciones" element={    
              <ProtectedRoute>
                  <Actualizaciones />
              </ProtectedRoute>} />
            <Route path="/crud/Eliminacion" element={    
              <ProtectedRoute>
                  <Eliminacion />
              </ProtectedRoute>} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;