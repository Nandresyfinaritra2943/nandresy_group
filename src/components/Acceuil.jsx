import React from "react";

function Acceuil () {

    return (
        <div className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-white text-center p-4 z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Choisir, c'est agir.</h1>
                <p className="text-lg md:text-xl">Prêts à faire le bon choix ?</p>
            </div>
    </div>
    )
}
export default Acceuil;