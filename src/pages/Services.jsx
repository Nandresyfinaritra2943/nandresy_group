import React from "react";
import ServiceSections from "../components/serviceSections";

import QA from '../assets/image/QA.jpg'
import dev from '../assets/image/dev.jpg'
import AQ from '../assets/image/AQ.jpg'

function Services () {

    return (
        <div>
            <ServiceSections 
                title="Solutions de gestions des donnees avec PHP"
                description="Optimisez vos performances avec nos solutions Web adaptées à votre entreprise."
                image={QA}
            />
            <ServiceSections 
                title="Solutions de gestions des donnees avec React JS"
                description="Optimisez vos performances avec nos solutions Web interactive qui offre des experiences utilisateurs adaptées à votre entreprise."
                image={dev}
                reverse
            />
            <ServiceSections 
                title="Solutions de gestions des donnees avec Stylisations Interactive"
                description="Optimisez vos performances avec nos design Attractive qui rend votre site ou application Web performant et facile a utiliser."
                image={AQ}
            />
        </div>
    )
}
export default Services