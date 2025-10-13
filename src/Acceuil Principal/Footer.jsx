import React from "react";

function Footer () {

    return (
        <>
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        {/* <img src="/logo-sra-white.png" alt="NRZ Madagascar" className="h-10 mb-4" /> */}
                        <div className="flex flex-col bg-transparent">
                            <span className="text-[antiquewhite] text-3xl font-bold tracking-widest">SprayAcad</span>
                            <span className="text-[antiquewhite] text-lg tracking-widest mt-2">MADAGASCAR</span>
                        </div>
                    </div>
                    <div className="items-center justify-center">
                        <h4 className="font-bold mb-2"> Ressources </h4>
                        <ul>
                            <li> Nos solutions </li>
                            <li> Téléchargement </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contactez-Nous</h4>
                        <p>+261 38 73 306 27</p>
                        <p>www.sprayacad.com</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2"> A propos </h4>
                        <ul>
                            <li>Qui sommes-nous ?</li>
                            <li>Nos services</li>
                            <li>Nous recrutons !</li>
                        </ul>
                    </div>
                </div>
                <div className='border-b-2 bg-slate-500 my-6 w-auto'></div>
                <div>
                    <p className="text-sm items-center text-center"> © SprayAcad Madagascar 2024 </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;