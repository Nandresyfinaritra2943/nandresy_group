import HeaderConnexion from "./headerConnexion";
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../AuthContext";

function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // debug: afficher le payload avant envoi (utile pour vérifier dans la console)
      console.log("register payload:", { nom, email, Telephone, password, role });

      await register(nom, email, Telephone, password, role);
      setSuccess("Inscription réussie ! Vous pouvez vous connecter.");
      setTimeout(() => navigate("/signin"), 5000);
    } catch (err) {
      // Affiche le message renvoyé par le backend si disponible
      const backendMsg = err?.response?.data?.error || err?.response?.data?.message;
      setError(backendMsg || "Erreur d'inscription, essayez un autre email.");
      console.error("Register error:", err);
    }
  };

  return (
    <>
      
      <div className="flex flex-col bg-white/30 shadow-md sticky top-0 z-50 ">
        <HeaderConnexion />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50/50 text-[#202124] font-[Arial]   ">
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row min-h-[600px]">

            {/* PARTIE GAUCHE: Formulaire de Connexion (Sign In) */}
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">

                <h1 className="text-3xl font-bold text-center text-blue-600 items-center mb-8">
                  Inscription
                </h1>

                <form onSubmit={handleSubmit}>
                  {/* <h2 className="text-2xl font-semibold text-center mb-4">
                    Inscription
                  </h2> */}
                  {success && (
                    <p className="text-green-500 text-sm mb-3">{success}</p>
                  )}
                  {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                  <div className="grid grid-cols-1 md:grid-cols-1 ">
                    <div className="relative mb-8 mx-5">
                      <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                        className="w-full p-4 bg-transparent border bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                      />
                      <label
                        htmlFor="nom"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-white peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                      >
                        Nom
                      </label>
                    </div>

                    <div className="relative mb-8 mx-5">
                      <input
                        type="text"
                        id="mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-4 bg-transparent border bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                      />
                      <label
                        htmlFor="mail"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-white peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                      >
                        E-mail
                      </label>
                    </div>

                    <div className="relative mb-8 mx-5">
                      <input
                        type="text"
                        id="telephone"
                        value={Telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required
                        className="w-full p-4 bg-transparent border bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                      />
                      <label
                        htmlFor="mail"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-white peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                      >
                        Telephone
                      </label>
                    </div>

                    <div className="relative mb-8 mx-5">
                      <label
                        htmlFor="role"
                        className="flex text-[#9aa0a6] text-sm font-bold mb-2"
                      >
                        Role
                      </label>
                      <select
                        className="w-full p-4 bg-transparent border bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">-- Choisir un rôle --</option>
                        <option value="ROLE_ADMIN">Administrateur</option>
                        <option value="ROLE_FORMATEUR">Formateur</option>
                        <option value="ROLE_ETUDIANT">Etudiant</option>
                      </select>
                    </div>

                    <div className="relative mb-8 mx-5">
                      <input
                        type="password"
                        id="mdp"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-4 bg-transparent border bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                      />
                      <label
                        htmlFor="mdp"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-white peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                      >
                        Mot de passe
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-[340px] py-4 bg-[#8ab4f8] text-[#202124] rounded-md text-lg font-bold hover:bg-opacity-90 transition-colors"
                  >
                    S'inscrire
                  </button>
                </form>
                <p className="mt-3 text-sm text-center">
                  Déjà un compte ?{" "}
                  <Link to="/signin" className="text-blue-600 hover:underline">
                    Se connecter
                  </Link>
                </p>
            </div>

            {/* PARTIE DROITE: Bannière (Hello, Friend!) */}
            <div 
              className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center bg-indigo-600 order-1 md:order-2"
              style={{
                  // Utilisation d'un dégradé et de clip-path pour la forme courbée
                  background: 'linear-gradient(to right, #4c51bf, #667eea)', 
                  // La forme courbée est visible uniquement sur grand écran
                  clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                }}
              >
                {/* Contenu de la bannière */}
                <h2 className="text-4xl font-extrabold mb-4">
                  De aona ny fandeany jiaby!
                </h2>
                <p className="text-lg mb-8 max-w-sm">
                  Connectez-vous avec votre compte personnel pour acceder a tous les contenue et notifications .
                </p>
                <Link
                  to="/signin" // Remplacé 'to' par 'href'
                  className="bg-white text-indigo-700 font-semibold py-3 px-10 rounded-full border-2 border-white hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-[1.05]"
                >
                  Se Connecter
                </Link>
            </div>
          
        </div>
      </div>
      
    </>
  );
}
export default RegisterPage;
