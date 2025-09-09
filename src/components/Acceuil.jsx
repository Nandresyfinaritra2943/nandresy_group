import React from "react";

function Acceuil () {
    return (
        <section 
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/devops.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="text-white z-10 text-center px-7">
                <h1 className=" text-5xl font-bold mb-4">
                    Découvrez comment NRZ Madagascar peut vous aider à créer ou améliorer vos Site Web
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Grâce à son expertise dans le déploiement des solutions de gestion des versions et differents types de technologies.
                </p>
                <button className="bg-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-800">
                    Découvrez maintenant
                </button>
            </div>
        </section>
    )
}
export default Acceuil