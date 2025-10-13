import React from 'react';
import { Home, Compass, Users, Clock, ThumbsUp } from 'lucide-react'; 

// Structure des liens (inchangée)
const mainLinks = [
  { icon: Compass, text: "Explorer", href: "#explore" },
  { icon: Users, text: "Abonnements", href: "#subscriptions" },
];
const secondaryLinks = [
  { icon: Clock, text: "Historique", href: "#history" },
  { icon: ThumbsUp, text: "Vidéos 'J'aime'", href: "#liked" },
];
const homeLink = { icon: Home, text: "Accueil", href: "#home" }; 

// Composant de lien unique (inchangé)
const SidebarLink = ({ Icon, text, expanded }) => (
  <a 
    href="#" 
    className={`
      flex items-center p-3 text-sm rounded-lg 
      text-gray-900 dark:text-gray-100 
      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200
      ${expanded ? 'justify-start space-x-4' : 'justify-center'}
    `}
  >
    <Icon className={`w-6 h-6 ${expanded ? 'shrink-0' : ''}`} />
    {expanded && <span className="whitespace-nowrap">{text}</span>}
  </a>
);

// Composant Sidebar
const Sidebar = ({ children, isExpanded, isMobileOpen, setIsMobileOpen }) => {

  return (
    <div className="flex w-full">
      
      {/* 1. Barre Latérale pour Écrans Larges (Desktop) */}
      <aside 
        className={`
          hidden lg:flex flex-col fixed left-0 
          top-16 /* ✅ COMMENCE SOUS LE HEADER */
          h-[calc(100vh-4rem)] /* Prend la hauteur restante */
          bg-white dark:bg-gray-800 
          pt-4 pb-4 overflow-y-auto z-40
          transition-all duration-300 border-r border-gray-300 dark:border-gray-700
          ${isExpanded ? 'w-60 px-4' : 'w-20'} 
        `}
      >
        <div className="flex flex-col space-y-2">
          
          <SidebarLink Icon={homeLink.icon} text={homeLink.text} expanded={isExpanded} />
          {mainLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={isExpanded} />))}
          {isExpanded && <hr className="my-2 border-gray-300 dark:border-gray-600" />}
          {secondaryLinks.map(link => (<SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={isExpanded} />))}

        </div>
      </aside>

      {/* 2. L'espace principal pour le contenu */}
      <main 
        className={`
          flex-grow p-4 transition-all duration-300
          ${isExpanded ? 'lg:ml-60' : 'lg:ml-20'} /* Décale le contenu */
        `}
      >
        {children}
      </main>

      {/* 3. Barre Latérale pour Écrans Mobiles (Mobile) - Overlay */}
      <div 
        className={`
          lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[90] transition-opacity duration-300
          ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMobileOpen(false)} // Fermer l'overlay
      >
        <aside 
          className={`
            fixed left-0 
            top-16 /* COMMENCE SOUS LE HEADER (Mobile) */
            h-[calc(100vh-4rem)] /* Prend la hauteur restante */
            w-64 bg-white dark:bg-gray-800 
            p-4 overflow-y-auto transform transition-transform duration-300 z-[100]
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Contenu Mobile (toujours étendu) */}
          <div className="flex flex-col space-y-2 pt-4">
            <SidebarLink Icon={homeLink.icon} text={homeLink.text} expanded={true} />
            {mainLinks.map(link => <SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={true} />)}
            <hr className="my-2 border-gray-300 dark:border-gray-600" />
            {secondaryLinks.map(link => <SidebarLink key={link.text} Icon={link.icon} text={link.text} expanded={true} />)}
          </div>
        </aside>
      </div>

    </div>
  );
};

export default Sidebar;