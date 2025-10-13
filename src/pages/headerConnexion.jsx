import React, {useState} from "react";
import { Link } from 'react-router-dom'; 
// import { Link as ScrollLink } from 'react-scroll'; 

function HeaderConnexion() {

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className=" shadow-md sticky top-0 z-50 bg-slate-100/90">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between  ">
                    
                    <div className="flex items-center space-x-10 rounded-full ">
                        <a href="#">
                            <div className="flex flex-col items-center justify-center bg-transparent">
                                <span className="text-blue-600 text-4xl font-bold tracking-widest">SprayAcad</span>
                                <span className="text-blue-600 text-lg tracking-widest mt-2">MADAGASCAR</span>
                            </div>
                        </a>
                        
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                    
                        {/* Ces liens pointent vers de nouvelles pages (URLs) -> utilise Link */}
                        <Link to="/signin" className="text-gray-700 bg-green-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                            Se connecter
                        </Link>
                        <Link to="/signup" className="text-gray-700 bg-red-100 px-4 py-2 rounded-md hover:text-blue-600 font-medium cursor-pointer">
                            S'inscrire
                        </Link>
                        <Link 
                            to="/" 
                            className="mt-8 text-blue-700 hover:text-blue-900 font-medium flex text-right"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Retour
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
                                
                                <Link 
                                    to="/" 
                                    className="mt-8 text-blue-700 hover:text-blue-900 font-medium flex text-right"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Retour à la page d'accueil
                                </Link>
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
export default HeaderConnexion;