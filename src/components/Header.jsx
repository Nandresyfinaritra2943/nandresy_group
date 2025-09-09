import React, { useState } from "react";
import { Link } from "react-router-dom";
import NRZ from '../assets/NRZM.png'

function Header () {

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-50 ">
            {/* <header className="flex justify-between items-center px-4 py-2 bg-gray-100/90 text-gray-400 shadow-md sticky top-0 z-50"> */}
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-10 rounded-full">
                        <Link to="/">
                            {/* <img src={NRZ} alt="NRZ Madagascar" className="h-10 w-20 h-20 bg-none rounded-full object-cover"/> */}
                            <div className="flex flex-col items-center justify-center bg-transparent">
                                <span className="text-gray-700 text-6xl font-bold tracking-widest">NRZ</span>
                                <span className="text-gray-700 text-lg tracking-widest mt-2">MADAGASCAR</span>
                            </div>
                        </Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-30">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        <nav className="hidden md:block">
                            <ul className="flex space-x-4">
                                <li> <Link to="/" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Acceuil </Link> </li>
                                <li> <Link to="solutions" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Solutions </Link> </li>
                                <li> <Link to="services" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Services </Link> </li>
                            </ul>
                        </nav>

                        <nav className={`
                        md:hidden ${isOpen ? 'block' : 'hidden'}
                        absolute top-16 left-0 w-full bg-gray-200 p-4 z-20
                        `}>
                            <ul className="flex space-x-4">
                                <li> <Link to="/" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Acceuil </Link> </li>
                                <li> <Link to="solutions" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Solutions </Link> </li>
                                <li> <Link to="/services" onClick={closeMenu} className="transition-shadow text-gray-700 hover:text-blue-600 font-medium cursor-pointer"> Nos Services </Link> </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Link to="/contact" className="bg-blue-900 text-white font-bold px-4 py-2 hover:bg-blue-700 rounded">
                            Contactez-nous
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;