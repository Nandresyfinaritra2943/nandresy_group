import React, { useState, useContext, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { Home, Compass, Users, Clock, ThumbsUp, Menu, Sun, Moon, MessagesSquare, BarChart3 } from 'lucide-react'; 

//  import { MessageSquare, MessageCircle, MessagesSquare, Send, Inbox } from 'lucide-react';
//  import { LayoutDashboard, BarChart3, PieChart, Activity } from 'lucide-react';


import AuthContext from "../AuthContext"; 
// --- STRUCTURE DE LA SIDEBAR ---
const mainLinks = [
  { icon: Home, text: "Accueil", href: "#home" },
  { icon: Compass, text: "Explorer", href: "#explore" },
  { icon: Users, text: "Abonnements", href: "#subscriptions" },
];
const secondaryLinks = [
  { icon: BarChart3, text: "DashBoard", href: "#history" },
  { icon: MessagesSquare, text: "Message", href: "#liked" },
];

// Composant de lien unique
const SidebarLink = ({ Icon, text, expanded }) => (
  <a 
    href="#" 
    className={`
      flex items-center p-3 text-sm rounded-lg 
      /* Couleurs de texte et de fond */
      text-gray-900 dark:text-gray-100 
      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200
      ${expanded ? 'justify-start space-x-4' : 'justify-center'}
    `}
  >
    <Icon className={`w-6 h-6 ${expanded ? 'shrink-0' : ''}`} />
    {expanded && <span className="whitespace-nowrap">{text}</span>}
  </a>
);


// --- LE COMPOSANT LAYOUT PRINCIPAL ---
const DashboardLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  // 1. LOGIQUE DU THÈME
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // 2. EFFET POUR APPLIQUER LA CLASSE 'dark' AU <html> ET STYLER LE <body>
  useEffect(() => {
    const root = window.document.documentElement; // <html>
    const body = window.document.body; // <body>
    
    // Réinitialise les classes par défaut sur le body
    body.classList.remove('bg-gray-100', 'bg-gray-900', 'text-gray-900', 'text-gray-100');

    if (theme === 'dark') {
      root.classList.add('dark');
      // Applique les styles sombres par défaut au body
      body.classList.add('bg-gray-900', 'text-gray-100');
    } else {
      root.classList.remove('dark');
      // Applique les styles clairs par défaut au body
      body.classList.add('bg-gray-100', 'text-gray-900');
    }
    
    localStorage.setItem('theme', theme); 
  }, [theme]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // États de la Sidebar
  const [isExpanded, setIsExpanded] = useState(true); 
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    // La couleur de fond est gérée par le body via useEffect. 
    // Cette div gère juste la hauteur minimale
    <div className="min-h-screen"> 
      
      {/* 1. HEADER FIXE (h-16 est la clé) */}
      <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50 h-16 flex items-center">
        
        {/* ZONE GAUCHE : Logo + Bouton Toggle. Largeur dynamique pour l'alignement de la Sidebar. */}
        <div 
          className={`
            flex items-center h-full flex-shrink-0 transition-all duration-300
            ${isExpanded ? 'w-60 px-4' : 'w-20'} 
          `}
        >
          {/* Bouton Toggle Menu (Desktop) */}
          <button 
              onClick={() => setIsExpanded(prev => !prev)} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden lg:block"
          >
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
          {/* Bouton Toggle Menu (Mobile) */}
          <button 
              onClick={() => setIsMobileOpen(true)} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
          >
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <div className="ml-4 flex-grow hidden lg:block">
              <span className="text-blue-600 dark:text-blue-400 text-xl font-bold tracking-widest">SprayAcad</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs tracking-widest block -mt-1">MADAGASCAR</span>
          </div>

          {/* Logo "SprayAcad" (visible quand le menu est étendu) */}
          {isExpanded && (
            ""
          )}
        </div>

        {/* ZONE DROITE : Contenu de HeaderConnexion + Bouton Thème */}
        <div className="flex-grow flex items-center justify-end space-x-4 pr-4">
            
            {/* BOUTON DE CHANGEMENT DE THÈME */}
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-6 h-6 text-yellow-400" /> 
                ) : (
                    <Moon className="w-6 h-6 text-gray-500" />
                )}
            </button>
            
            {/* Reste des liens HeaderConnexion */}
            <Link to="/signin" className="text-gray-700 bg-green-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer hidden md:block">
                Se connecter
            </Link>
            <Link to="/signup" className="text-gray-700 bg-red-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer hidden md:block">
                S'inscrire
            </Link>
            <Link to="/" className="text-blue-700 hover:text-blue-900 font-medium flex items-center hidden md:flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
            </Link>
        </div>
      </header>

      {/* 2. CONTENEUR PRINCIPAL (Décalé par mt-16) */}
      <div className="mt-16 flex">
        
        {/* SIDEBAR FIXE - Commence SOUS le Header (top-16) */}
        <aside 
            className={`
                hidden lg:flex flex-col fixed left-0 
                top-16 
                h-[calc(100vh-4rem)] 
                bg-white dark:bg-gray-800 
                pt-4 pb-4 overflow-y-auto z-40
                transition-all duration-300 border-r border-gray-300 dark:border-gray-700
                ${isExpanded ? 'w-60 px-4' : 'w-20'} 
            `}
        >
            <div className="flex flex-col space-y-2">
                {mainLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={isExpanded} />))}
                {isExpanded && <hr className="my-2 border-gray-300 dark:border-gray-600" />}
                {secondaryLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={isExpanded} />))}
            </div>
        </aside>

        {/* CONTENU PRINCIPAL (main) */}
        <main 
            className={`
                flex-grow p-4 transition-all duration-300 w-full
                ${isExpanded ? 'lg:ml-60' : 'lg:ml-20'} 
            `}
        >
            {children} 
        </main>

      </div>
      
      {/* 3. MENU MOBILE - Overlay (Simplifié) */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[90] transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileOpen(false)} 
      >
        <aside 
          className={`
            fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 p-4 overflow-y-auto transform transition-transform duration-300 z-[100]
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()} 
        >
            {/* Bouton de fermeture dans le menu mobile */}
            <div className="flex justify-between items-center mb-6 pt-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl font-bold tracking-widest">SprayAcad</span>
                <button 
                    onClick={() => setIsMobileOpen(false)} 
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </button>
            </div>
            {/* Liens Mobile */}
            <div className="flex flex-col space-y-2">
                {mainLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={true} />))}
                <hr className="my-2 border-gray-300 dark:border-gray-600" />
                {secondaryLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={true} />))}
            </div>
        </aside>
      </div>

    </div>
  );
};

export default DashboardLayout;