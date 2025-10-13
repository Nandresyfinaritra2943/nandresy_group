import React from "react";
import QA from '../assets/image/QA.jpg'
import dev from '../assets/image/dev.jpg'
import AQ from '../assets/image/AQ.jpg'
import FormationSections from "../Acceuil Principal/FormationSection";


function Formations () {

    return (
        <div  className="bg-blue-50/10 ">

            <h2
            className="text-3xl text-gray-500  font-bold text-center mb-8"> <u> Nos Formations </u> !</h2>

            <FormationSections
                
                title="Formation certifier en Developpement DevPro"
                description="Optimisez vos performances avec nos solutions Web adaptées à votre entreprise."
                image={QA}
            />
            <FormationSections 
                title="Formation certifier en Administration des Reseau et Systeme ReseauPro"
                description="Optimisez vos performances avec nos solutions Web interactive qui offre des experiences utilisateurs adaptées à votre entreprise."
                image={dev}
                reverse
            />
            <FormationSections  
                title="Formation certifier en Deploiement des Infrastructures DevOPS"
                description="Optimisez vos performances avec nos design Attractive qui rend votre site ou application Web performant et facile a utiliser."
                image={AQ}
            />
        </div>
    )
}
export default Formations