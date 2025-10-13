import React, {useState} from "react";
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="bg-slate-100/90 shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    
                    <div className="flex items-center space-x-10 rounded-full">
                        <a href="#">
                            <div className="flex flex-col items-center justify-center bg-transparent">
                                <span className="text-blue-600 text-4xl font-bold tracking-widest">SprayAcad</span>
                                <span className="text-blue-600 text-lg tracking-widest mt-2">MADAGASCAR</span>
                            </div>
                        </a>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-4">
                                {/* Ces liens pointent vers des sections (IDs) -> utilise ScrollLink */}
                                <li> <ScrollLink to="Acceuil" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Acceuil </ScrollLink></li>
                                <li> <ScrollLink to="Formation" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Formations </ScrollLink></li>
                                <li> <ScrollLink to="Apropos" spy={true} smooth={true} duration={1500} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> A propos </ScrollLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {/* Celui-ci pointe vers une section (ID) -> utilise ScrollLink */}
                        <ScrollLink to="Contact" spy={true} smooth={true} duration={1500} className="bg-blue-900 text-white font-bold px-4 py-2 hover:bg-blue-700 rounded">
                            Contactez-nous
                        </ScrollLink>
                        {/* Ces liens pointent vers de nouvelles pages (URLs) -> utilise Link */}
                        <Link to="/signin" className="text-gray-700 bg-green-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                            Se connecter
                        </Link>
                        <Link to="/signup" className="text-gray-700 bg-red-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                            S'inscrire
                        </Link>
                    </div>

                    {/* Bouton pour le menu Hamburger (inchangé) */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-30 flex flex-col items-center justify-center">
                        <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>

                    {/* navigation en menu Hamburger pour les mobiles*/}
                    <nav className={`
                        md:hidden ${isOpen ? ' top-16 opacity-100 scale-y-100' : ' top-10 opacity-0 scale-y-0'}
                        absolute top-16 left-0 w-72 text-center items-center bg-gray-200 p-4 z-20 rounded-lg
                        transform transition-all duration-300 ease-in-out origin-top
                        `}>
                            <ul className="flex flex-col space-y-4">
                                {/* Liens vers des sections (IDs) -> J'utilise ScrollLink */}
                                <li> <ScrollLink to="Acceuil" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Acceuil </ScrollLink> </li>
                                <li> <ScrollLink to="Formation" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Formations </ScrollLink> </li>
                                <li> <ScrollLink to="Apropos" spy={true} smooth={true} duration={1500} onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> A propos </ScrollLink> </li>
                                
                                <ScrollLink to="Contact" spy={true} smooth={true} duration={1500} onClick={closeMenu} className=" bg-blue-900 text-white font-bold px-4 py-2 hover:bg-blue-700 rounded ">
                                    Contactez-nous 
                                </ScrollLink>
                                
                                {/* Liens vers de nouvelles pages (URLs) -> J'utilise Link */}
                                <Link to="/signin" onClick={closeMenu} className="text-gray-700 bg-green-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                                    Se connecter
                                </Link>
                                <Link to="/signup" onClick={closeMenu} className="text-gray-700 bg-red-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                                    S'inscrire
                                </Link>
                            </ul>
                    </nav>

                </nav>
            </header>
        </>
    )
}
export default Header;