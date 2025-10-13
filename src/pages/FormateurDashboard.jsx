import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
import DashboardLayout from "../components/DashboardLayout"; 

export default function EtudiantDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const dashboardContent = (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] p-4">
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96 max-w-full text-center">
          
          {/* ✅ Correction : Le titre et le texte basculent */}
          <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tableau de bord</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Bonjour <strong className="text-gray-800 dark:text-white">{user?.nom || "Utilisateur"}</strong> 👋
          </p>
          <p className="text-gray-700 dark:text-gray-400">Vous êtes connecté en tant que <b>Formateur</b>.</p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </div>
  );

  return (
      <DashboardLayout>
          {dashboardContent}
      </DashboardLayout>
  );
}
