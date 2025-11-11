import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 
import {
  Home,
  Compass,
  Users,
  Menu,
  Sun,
  Moon,
  MessagesSquare,
  BarChart3,
} from "lucide-react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    const [theme, setTheme] = useState(localStorage.getItem("theme" || "ligth"));

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        body.classList.remove("bg-gray-100", "bg-gray-900", "text-gray-900", "text-gray-100");

        if (theme === "dark") {
            root.classList.add("dark");
            body.classList.add("bg-gray-900", "text-gray-100");
        }
        else {
            root.classList.remove("dark");
            body.classList.add("bg-gray-100", "text-gray-900");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <div className="">

            <style>
                {`
                @keyframes color-change {
                0% { color: #3b82f6; }
                25% { color: #f97316; }
                50% { color: #ef4444; }
                75% { color: #22c55e; }
                100% { color: #3b82f6; }
                }
                @keyframes bounce-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
                }
                `}
            </style>


            <header className="bg-slate-100/90  dark:bg-gray-800/90  shadow-md fixed  z-50 top-0 left-0 right-0 h-16 flex items-center justify-between px-4">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    
                    <div className="flex items-center space-x-10 rounded-full">
                        <a href="#">
                            <div>
                                 <span className="text-2xl font-bold tracking-widest animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]">
                                    Nandresy
                                </span>
                                <span className="text-gray-500 dark:text-gray-400 text-lg block -mt-1">
                                    RAZAFIMAHEFA
                                </span>
                            </div>
                        </a>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-4">
                                <li> <ScrollLink  to="HeroSection" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Acceuil </ScrollLink></li>
                                <li> <ScrollLink  to="ParcoursAcademique" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Formations </ScrollLink></li>
                                <li> <ScrollLink  to="Competences" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Competences </ScrollLink></li>
                                <li> <ScrollLink  to="Projet" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Projets </ScrollLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <p 
                            onClick={toggleTheme}
                            className="transition-shadow text-gray-700 dark:text-gray-100 dark:hover:text-blue-400 hover:text-blue-600 font-medium cursor-pointer"> Thème </p>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                            {theme === "dark" ? (
                                <Sun className="w-6 h-6 text-yellow-400" />
                            ) : (
                                <Moon className="w-6 h-6 text-gray-500" />
                            )}
                        </button>

                        <button
                            className="bg-blue-900 text-gray-200 font-semibold px-7 py-3 rounded-lg hover:bg-blue-800">
                                
                                <ScrollLink to="Contact" spy={true} smooth={true} duration={1500} > Contactez-moi </ScrollLink>
                        </button>

                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-30 flex flex-col items-center justify-center  text-gray-800 dark:text-gray-200">
                        <div className={`w-6 h-0.5 bg-gray-700  dark:bg-gray-100  transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-700  dark:bg-gray-100 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-700  dark:bg-gray-100 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>

                    <nav className={`
                        md:hidden ${isOpen ? ' top-16 opacity-100 scale-y-100' : ' top-10 opacity-0 scale-y-0'}
                        absolute top-16 left-0 w-72 text-center items-center bg-gray-200 p-4 z-20 rounded-lg
                        transform transition-all duration-300 ease-in-out origin-top
                        dark:bg-gray-500
                        `}>
                            <ul className="flex flex-col space-y-4">
                                <li> <ScrollLink to="HeroSection" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Acceuil </ScrollLink></li>
                                <li> <ScrollLink to="ParcoursAcademique" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Formations </ScrollLink></li>
                                <li> <ScrollLink to="Competences" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Compétences </ScrollLink></li>
                                <li> <ScrollLink to="Projet" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> Mes Projets </ScrollLink></li>
                                <li> 
                                    <ScrollLink to="Apropos" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-medium cursor-pointer"> 
                                        <div className="flex items-center text-center ml-20">
                                            <p 
                                                onClick={toggleTheme}
                                                className="transition-shadow text-gray-700 dark:text-gray-100 dark:hover:text-blue-400 hover:text-blue-600 font-medium cursor-pointer"> 
                                                Thème 
                                            </p>
                                            <button
                                                onClick={toggleTheme}
                                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                                                >
                                                {theme === "dark" ? (
                                                    <Sun className="w-6 h-6 text-yellow-400" />
                                                ) : (
                                                    <Moon className="w-6 h-6 text-gray-500" />
                                                )}
                                            </button>
                                        </div>
                                    </ScrollLink> 
                                </li>
                                
                                <button
                                    
                                    className="bg-blue-900 text-gray-200 font-semibold px-7 py-3 rounded-lg hover:bg-blue-800">
                                        
                                        <ScrollLink to="Contact" spy={true} smooth={true} duration={1500} onClick={closeMenu}> Contactez-moi </ScrollLink>
                                </button>
                            </ul>
                    </nav>

                </nav>
            </header>
        </div>
    )

}
export default Header