import React from "react";

function Footer () {

    return (
        <>
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        {/* <img src="/logo-sra-white.png" alt="NRZ Madagascar" className="h-10 mb-4" /> */}
                        <div class="flex flex-col bg-transparent">
                            <span class="text-[antiquewhite] text-6xl font-bold tracking-widest">NRZ</span>
                            <span class="text-[antiquewhite] text-lg tracking-widest mt-2">MADAGASCAR</span>
                        </div>
                        <p className="text-sm">© NRZ Madagascar 2024</p>
                    </div>
                    <div className="items-center justify-center">
                        <h4 className="font-bold mb-2"> Ressources </h4>
                        <ul>
                            <li> Nos solutions </li>
                            <li> Téléchargement </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2"> A propos </h4>
                        <ul>
                            <li>Qui sommes-nous ?</li>
                            <li>Nos services</li>
                            <li>Nous recrutons !</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contactez-Nous</h4>
                        <p>+261 38 73 306 27</p>
                        <p>contact.nandresy@groupe-nrz.com</p>
                    </div> 
                </div>
            </footer>
        </>
    )
}
export default Footer;