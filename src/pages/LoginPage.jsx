// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import HeaderConnexion from './headerConnexion';
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import api from '../api';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(email, password);
  //     navigate("/dashboard");
  //   } catch (err) {
  //     setError("Email ou mot de passe incorrect !");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await login(email, password);

    // ⚙️ Récupérer les infos utilisateur après connexion
    const token = response.data.token;
    const resUser = await api.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = resUser.data;
    localStorage.setItem("user", JSON.stringify(user));

    // 🧭 Redirection selon le rôle
    const role = user.roles[0];
    if (role === "ROLE_ETUDIANT") navigate("/dashboard/etudiant");
    else if (role === "ROLE_FORMATEUR") navigate("/dashboard/formateur");
    else if (role === "ROLE_ADMIN") navigate("/dashboard/admin");
    else navigate("/dashboard"); // fallback

  } catch (err) {
    console.error("Erreur de connexion:", err);
    setError("Email ou mot de passe incorrect !");
  }
};


  return (
    <>
      <div className="flex flex-col bg-white/30 shadow-md sticky top-0 z-50 ">
        <HeaderConnexion />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50/75 text-[#202124] font-[Arial]   ">

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row min-h-[600px]">
          
            {/* PARTIE GAUCHE: Formulaire de Connexion (Sign In) */}
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">

                <h1 className="text-3xl font-bold text-center items-center mb-8">
                  Connexion à SprayAcad
                </h1>

                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-semibold text-center mb-4">Connexion</h2>
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
                        htmlFor="nom"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-white peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                      >
                        Email
                      </label>
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
                    Se Connecter
                  </button>
                </form>
                <p className="text-center mt-6">
                  Pas encore de compte ?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    S'inscrire
                  </Link>
                </p>
            </div>

            {/* PARTIE DROITE: Bannière (Hello, Friend!) */}
            <div 
              className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center bg-indigo-600 order-1 md:order-2 "
              style={{
                // Utilisation d'un dégradé et de clip-path pour la forme courbée
                background: 'linear-gradient(to right, #4c51bf, #667eea)', 
                // La forme courbée est visible uniquement sur grand écran
                // clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%)', 
              }}
            >
              <h2 className="text-4xl font-extrabold mb-4">
                De aona ny fandeany jiaby!
              </h2>
              <p className="text-lg mb-8 max-w-sm">
                Inscrivez-vous avec votre donnee personnel pour acceder a tous les nouvelles fonctionnalites .
              </p>
              <Link
                to="/signup" 
                className="bg-white text-indigo-700 font-semibold py-3 px-10 rounded-full border-2 border-white hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-[1.05]"
              >
                S'inscrire
              </Link>
            </div>
          
        </div>
      </div>
    </>
  );
}
export default LoginPage;





// import HeaderConnexion from './headerConnexion';
// import React, { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import AuthContext from "../AuthContext";


// // import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; 

// function LoginPage() {
//   // NOTE: La logique de useContext(AuthContext) est retirée car AuthContext n'est pas importable ici.
//   // const { login } = useContext(AuthContext); 
  
//   // Vos états existants
//   const [nom, setNom] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // Suppression de const navigate = useNavigate();

//   // Fonction handleSubmit simplifiée pour l'exécution dans cet environnement
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // NOTE: Remplacer cette section par votre vraie logique d'authentification (login(email, password))
//     if (email && password) {
//         setError(""); // Réinitialiser les erreurs
//         console.log("Tentative de connexion réussie pour:", { nom, email, password });
//         // Simuler une connexion réussie
//         // navigate("/dashboard"); 
//     } else {
//         setError("Veuillez remplir l'email et le mot de passe.");
//     }
//   };

//   return (
//     <>
//       {/* 1. Header (Espace réservé) */}
//       {/* NOTE: Remplacer cette section par votre composant <HeaderConnexion /> */}
//       <div className="flex flex-col bg-white/30 shadow-md sticky top-0 z-50 p-4">
//         <HeaderConnexion />
//       </div>

//       {/* 2. Conteneur principal (Design Split Screen) */}
//       <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-sans">
        
//         {/* Conteneur de la carte de formulaire (Shadow, Rounded) */}
//         <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row min-h-[600px]">

//           {/* PARTIE GAUCHE: Formulaire de Connexion (Sign In) */}
//           <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
//               Sign In
//             </h1>
//             <p className="text-center text-gray-500 mb-6">
//               or use your email password
//             </p>

//             {/* Options de connexion sociales (Remplacé les icônes par des Divs stylisées) */}
//             <div className="flex justify-center space-x-4 mb-8">
//               <button className="border border-gray-300 rounded-full p-3 hover:bg-indigo-50 transition duration-200 w-12 h-12 flex items-center justify-center">
//                 <span className="text-xl text-gray-600">G</span>
//               </button>
//               <button className="border border-gray-300 rounded-full p-3 hover:bg-indigo-50 transition duration-200 w-12 h-12 flex items-center justify-center">
//                 <span className="text-xl text-gray-600">F</span>
//               </button>
//               <button className="border border-gray-300 rounded-full p-3 hover:bg-indigo-50 transition duration-200 w-12 h-12 flex items-center justify-center">
//                 <span className="text-xl text-gray-600">in</span>
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4 px-2 sm:px-5">
              
//               {/* Affichage des erreurs */}
//               {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
              
//               {/* Champ Nom (Conservé) */}
//               <div className="relative mb-6">
//                 <input
//                   type="text"
//                   id="nom"
//                   // Assure que le champ est marqué comme "valid" pour que le label s'affiche correctement
//                   className={`w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 text-base outline-none transition-colors duration-300 peer focus:border-indigo-500 ${nom ? 'peer-valid' : ''}`}
//                   value={nom}
//                   onChange={(e) => setNom(e.target.value)}
//                   // NOTE: 'required' est toujours une bonne pratique, mais ajustez si ce champ est facultatif
//                   required
//                 />
//                 <label
//                   htmlFor="nom"
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-3 peer-focus:text-xs peer-focus:-translate-y-0 peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-indigo-500 peer-valid:-top-3 peer-valid:text-xs peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-indigo-500"
//                 >
//                   Nom
//                 </label>
//               </div>

//               {/* Champ Email */}
//               <div className="relative mb-6">
//                 <input
//                   type="email" 
//                   id="mail"
//                   // Assure que le champ est marqué comme "valid" pour que le label s'affiche correctement
//                   className={`w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 text-base outline-none transition-colors duration-300 peer focus:border-indigo-500 ${email ? 'peer-valid' : ''}`}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <label
//                   htmlFor="mail" 
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-3 peer-focus:text-xs peer-focus:-translate-y-0 peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-indigo-500 peer-valid:-top-3 peer-valid:text-xs peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-indigo-500"
//                 >
//                   Email
//                 </label>
//               </div>

//               {/* Champ Mot de passe */}
//               <div className="relative mb-2">
//                 <input
//                   type="password"
//                   id="mdp"
//                   // Assure que le champ est marqué comme "valid" pour que le label s'affiche correctement
//                   className={`w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 text-base outline-none transition-colors duration-300 peer focus:border-indigo-500 ${password ? 'peer-valid' : ''}`}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <label
//                   htmlFor="mdp"
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-3 peer-focus:text-xs peer-focus:-translate-y-0 peer-focus:bg-gray-100 peer-focus:px-1 peer-focus:text-indigo-500 peer-valid:-top-3 peer-valid:text-xs peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-indigo-500"
//                 >
//                   Mot de passe
//                 </label>
//               </div>
              
//               {/* Lien Mot de passe oublié */}
//               <p className="text-xs text-right text-gray-500 hover:text-indigo-600 cursor-pointer mb-6">
//                 Forgot Your Password?
//               </p>


//               {/* Bouton de Connexion */}
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-indigo-600 text-white rounded-lg text-lg font-bold hover:bg-indigo-700 transition-colors shadow-md transform hover:scale-[1.01]"
//               >
//                 SIGN IN
//               </button>
//             </form>
//           </div>

//           {/* PARTIE DROITE: Bannière (Hello, Friend!) */}
//           <div 
//             className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center text-white text-center bg-indigo-600 order-1 md:order-2"
//             style={{
//               // Utilisation d'un dégradé et de clip-path pour la forme courbée
//               background: 'linear-gradient(to right, #4c51bf, #667eea)', 
//               // La forme courbée est visible uniquement sur grand écran
//               clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)', 
//             }}
//           >
//             {/* Contenu de la bannière */}
//             <h2 className="text-4xl font-extrabold mb-4">
//               Hello, Friend!
//             </h2>
//             <p className="text-lg mb-8 max-w-sm">
//               Register with your personal details to use all of site features.
//             </p>

//             {/* Bouton vers l'inscription (Utilise le lien existant) 
//             Remplacé <Link> par <a> pour compatibilité autonome */}
//             <a
//               href="/signup" // Remplacé 'to' par 'href'
//               className="bg-white text-indigo-700 font-semibold py-3 px-10 rounded-full border-2 border-white hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-[1.05]"
//             >
//               SIGN UP
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }
// export default LoginPage;
