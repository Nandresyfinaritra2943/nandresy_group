import React from "react";
import GoogleMap from "./GoogleMap";
import { motion } from "framer-motion";

import fb from "../assets/iconcontact/facebook_circled_48px.png";
import mail from "../assets/iconcontact/gmail_logo_48px.png";
import linkdin from "../assets/iconcontact/linkedin_circled_48px.png";
import watsapp from "../assets/iconcontact/whatsapp_48px.png";
import github from "../assets/iconcontact/github.png";

function Contact () {
    return (
        <section id="Contact" className=" mx-auto px-4 py-12 bg-gray-300 dark:bg-gray-700  rounded-lg overflow-hidden ">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#64748b] dark:text-gray-200"
            >
                 <span className="text-green-500"> CONTACTER </span> MOI
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-8">
                
                <div className="md:w-1/2 grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md mt-4 ">

                    <div className="flex flex-col items-center p-2 m-2">
                        <a href="https://www.facebook.com/mandresy.rz.2025" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="Facebook" className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-lg" />
                        </a>
                        <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Mandresy RZ</p>
                    </div>
                    <div className="flex flex-col items-center p-2 m-2">
                        <a href="mailto:jeneranandresy@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={mail} alt="Mon image de profil" className="w-full h-full object-cover" />
                        </a>
                        <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">jeneranandresy@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center p-2 m-2">
                        <a href="https://www.linkedin.com/in/nandresy-finaritra-65b756353" target="_blank"  > 
                            <img src={linkdin} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                        </a>
                        <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Linkedin</p>
                    </div>
                    <div className="flex flex-col items-center p-2 m-2">
                        <a href="https://wa.me/261387330627" target="_blank" > 
                            <img src={watsapp} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                            </a>
                        <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">+261 38 73 306 27</p>
                    </div>
                    <div className="flex flex-col items-center p-2 m-2">
                        <a href="https://github.com/Nandresyfinaritra2943" target="_blank" > 
                            <img src={github} alt="Mon image de profil" className="w-full h-full object-cover" /> 
                        </a>
                        <p className="mt-2 text-xs md:text-sm text-gray-800 font-semibold">Nandresyfinaritra2943</p>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <form className="bg-gray-100 dark:bg-gray-600  p-8 rounded-lg shadow-md">
                 
                        <div className="relative mb-8 mx-5">
                            <input
                                type="text"
                                id="nom"
                                required
                                className="w-full p-4 bg-transparent border dark:text-gray-50 bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                            />
                            <label
                                htmlFor="nom"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-gray-100 dark:peer-focus:bg-gray-600 dark:peer-valid:bg-gray-600 peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                            >
                                Nom et Prénom
                            </label>
                        </div>
                       <div className="relative mb-8 mx-5">
                            <input
                                type="text"
                                id="mail"
                                required
                                className="w-full p-4 bg-transparent border dark:text-gray-50 bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                            />
                            <label
                                htmlFor="mail"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-gray-100 dark:peer-focus:bg-gray-600 dark:peer-valid:bg-gray-600 peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                            >
                               Email
                            </label>
                        </div>
                        <div className="relative mb-8 mx-5">
                            <input
                                type="text"
                                id="telephone"
                                required
                                className="w-full p-4 bg-transparent border dark:text-gray-50 bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300 peer focus:border-[#8ab4f8]"
                            />
                            <label
                                htmlFor="telephone"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-gray-100 dark:peer-focus:bg-gray-600 dark:peer-valid:bg-gray-600 peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                            >
                               Telephone
                            </label>
                        </div>
                        <div className="relative mb-8 mx-5">
                            <textarea
                                type="text"
                                id="message"
                                required
                                className="w-full p-4 bg-transparent border dark:text-gray-50 bg-gray-100 rounded-md text-[#202124] text-lg outline-none transition-colors duration-300  peer focus:border-[#8ab4f8]"
                                rows="4"
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa0a6] pointer-events-none transition-all duration-700 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:-translate-y-0 peer-focus:bg-gray-100 dark:peer-focus:bg-gray-600 dark:peer-valid:bg-gray-600 peer-focus:px-1 peer-focus:text-[#8ab4f8] peer-valid:-top-2 peer-valid:text-sm peer-valid:-translate-y-0 peer-valid:bg-gray-100 peer-valid:px-1 peer-valid:text-[#8ab4f8]"
                            >
                                Message
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="submit">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>



            </div>
      
        </section>
    )
}
export default Contact;