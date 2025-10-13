import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold mb-4">Tableau de bord</h1>
        <p className="text-gray-600 mb-6">
          Bonjour <strong>{user?.email || "Utilisateur"}</strong> 👋
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
