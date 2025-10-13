import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 1. Décommenté et utilisé
import Header from "./Acceuil Principal/Header";
import Footer from "./Acceuil Principal/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Formations from "./pages/Formations";
import ScrollToTopButton from "./Acceuil Principal/ScrollToTopButton";

import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import HeaderConnexion from "./pages/headerConnexion";
import { AuthProvider } from "./AuthContext";
import DashboardPage from "./pages/DashboardPage";
import EtudiantDashboard from "./pages/EtudiantDashboard";
import FormateurDashboard from "./pages/FormateurDashboard";
import AdminDashboard from "./pages/AdminDashboard";
// import ParticuleBody from "./particlebody";




// Nouveau composant pour regrouper les pages qui ont le même Header/Footer
const DefaultLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
  
        <Routes>
            {/* L'accueil regroupe toutes les sections de la page principale */}
            <Route path="/" element={
                <>
                    <section id="Acceuil"><HomePage /></section>
                    <section id="Formation"><Formations /></section>
                    <section id="Contact"><ContactPage /></section>
                </>
            } />
          
        </Routes>

        <Footer />
        <ScrollToTopButton />
    </div>

);

const Layout = () => (
    <div className="flex flex-col min-h-screen">
        <HeaderConnexion />
   
        <ScrollToTopButton />
    </div>

);

function App () {
  return (
    <>
        <AuthProvider >
            <Router>
                <Routes>
                    
                    <Route path="/*" element={<DefaultLayout />} />
                    
                    <Route path="/signin" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<DashboardPage /> } />

                    <Route path="/dashboard/etudiant" element={<EtudiantDashboard />} />
                    <Route path="/dashboard/formateur" element={<FormateurDashboard />} />
                    <Route path="/dashboard/admin" element={<AdminDashboard />} />


                </Routes>
            </Router>
        </AuthProvider>
    </>
  )
}
export default App;