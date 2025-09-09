import React from "react";
import ServiceSections from "../components/serviceSections";

function Services () {

    return (
        <div>
            <ServiceSections 
                title="Solutions de gestions des donnees avec PHP"
                description="Optimisez vos performances avec nos solutions Web adaptées à votre entreprise."
                image="/src/assets/image/QA.jpg"
            />
            <ServiceSections 
                title="Solutions de gestions des donnees avec React JS"
                description="Optimisez vos performances avec nos solutions Web interactive qui offre des experiences utilisateurs adaptées à votre entreprise."
                image="/src/assets/image/dev.jpg"
                reverse
            />
            <ServiceSections 
                title="Solutions de gestions des donnees avec Stylisations Interactive"
                description="Optimisez vos performances avec nos design Attractive qui rend votre site ou application Web performant et facile a utiliser."
                image="/src/assets/image/AQ.jpg"
            />
        </div>
    )
}
export default Services