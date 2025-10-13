import { Link } from 'react-scroll';
import React from "react";
import { motion } from 'framer-motion';

function Acceuil () {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.5, // Délai de 0.1s entre chaque enfant
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0,  x:0 },
        visible: { opacity: 1, x:20 },
    };
    const itemVariants2 = {
        hidden: { opacity: 0,  x:20 },
        visible: { opacity: 1, x:0 },
    };
    const itemVariantsButon = {
        hidden: { opacity: 0,  y:20 },
        visible: { opacity: 1, y:0 },
    };

    return (
        <motion.section  initial={{opacity: 0}} animate={{opacity: 1}}
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/devops.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-white z-10 text-center px-7">
                
                <motion.h1 
                variants={itemVariants}
                className=" text-4xl font-bold mb-4">
                    Accompagner vos idées, nourrir vos inspirations, réaliser vos projets numériques : notre engagement au quotidien.
                </motion.h1>
                <motion.p 
                variants={itemVariants2}
                className="text-lg md:text-xl mb-6">
                    En intégrant le domaine numérique, découvrez un monde d'opportunités. Nos formations spécialisées vous accompagnent vers l'excellence professionnelle.
                </motion.p>
                <motion.button 
                variants={itemVariantsButon}
                className="bg-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-800">
                    
                    <Link to="Formation" spy={true} smooth={true} duration={1500} >Découvrez maintenant</Link>
                </motion.button>
            </motion.div>
        </motion.section>
    )
}
export default Acceuil