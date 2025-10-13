import React, { createContext, useState, useEffect } from "react";
import api from "./api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      // Sauvegarde le token dans localStorage
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Essaie de récupérer les infos du user connecté
      api
        .get("/me")
        .then((res) => setUser(res.data))
        .catch(() => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
        })
        .finally(() => setLoading(false));
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  // Requête d'inscription
  // const register = async (email, password) => {
  //   return api.post("/register", { email, password });

  // };

  // register: maintenant prend nom, email, password, role
  const register = async (nom, email, Telephone, password, role) => {
    const payload = { nom, email, Telephone, password };
    if (role) {
      // transformer role en tableau attendu par Symfony
      payload.roles = Array.isArray(role) ? role : [role];
    }
    return api.post("/register", payload);
  };

  // Requête de connexion
  const login = async (email, password) => {
    const res = await api.post("/login", { email, password });
    setToken(res.data.token);
    return res;
  };

  // Déconnexion
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    // <AuthContext.Provider value={{ user, token, register, login, logout, loading }}>
    //   {children}
    // </AuthContext.Provider>
    <AuthContext.Provider value={{ user, token, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
