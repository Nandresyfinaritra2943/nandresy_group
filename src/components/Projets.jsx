import React from 'react';
import ProjetCarte from './ProjetCarte';
import { motion } from 'framer-motion';

import projet1_1 from '../assets/Capture Acceuil JS.png';
import projet1_2 from '../assets/Capture Aceuil js.png';
import projet1_3 from '../assets/Delta JS.png';
import projet1_4 from '../assets/SecondDegreJs.png';
import projet1_5 from '../assets/PanneauJS.png';

import projet2_1 from '../assets/AcceuilHTML.png';
import projet2_2 from '../assets/DashHTML.png';
import projet2_3 from '../assets/DestinatHTML.png';
import projet2_4 from '../assets/VolHTML.png';
import projet2_5 from '../assets/ConnexionHTML.png';
import projet2_6 from '../assets/AfricHTML.png';

import projet3_1 from '../assets/saryJava/principal.png';
import projet3_2 from '../assets/saryJava/connexion.png';
import projet3_3 from '../assets/saryJava/prof.png';
import projet3_4 from '../assets/saryJava/salle.png';
import projet3_5 from '../assets/saryJava/edt.png';
import projet3_6 from '../assets/saryJava/edtmod.png';

import projet4_1 from '../assets/capturePortfolio/a.png';
import projet4_2 from '../assets/capturePortfolio/b.png';
import projet4_3 from '../assets/capturePortfolio/c.png';
import projet4_4 from '../assets/capturePortfolio/d.png';
import projet4_5 from '../assets/capturePortfolio/e.png';
import projet4_6 from '../assets/capturePortfolio/f.png';
import projet4_7 from '../assets/capturePortfolio/g.png';
import projet4_8 from '../assets/capturePortfolio/h.png';

import projet5_1 from '../assets/Screen Projet/phptarif.png';
import projet5_2 from '../assets/Screen Projet/phppersonne.png';
import projet5_3 from '../assets/Screen Projet/phphisto.png';
import projet5_4 from '../assets/Screen Projet/phpfacture.png';
import projet5_5 from '../assets/Screen Projet/phpajout.png';

import projet6_1 from '../assets/Screen Projet/vuebilan.png';
import projet6_2 from '../assets/Screen Projet/vuehisto.png';
import projet6_3 from '../assets/Screen Projet/vuelogin.png';


function Projet() {
  const projets = [
    {
      id: 1,
      title: "Analogique Calculator",
      images: [projet1_1, projet1_2, projet1_3, projet1_4, projet1_5],
      description: "Application web pour resolution d'equation de second degre, calcule de circuit analogique et affichage de panneau publicitaire.",
    },
    {
      id: 2,
      title: "IZY Travel",
      images: [projet2_1, projet2_2, projet2_3, projet2_4, projet2_5, projet2_6],
      description: "Maquette pour site web de reservation de voyage .",
    },
    {
      id: 3,
      title: " EDT : Profs & Classes ",
      images: [projet3_1, projet3_2, projet3_3, projet3_4, projet3_5, projet3_6], // Un projet peut n'avoir qu'une seule image
      description: "Application Desktop pour la gestion d'emploie du temp des professeurs et des salles de classe realiser avec JAVA.",
    },
    {
      id: 4,
      title: "Portfolio Devolper",
      images: [projet4_1, projet4_2, projet4_3, projet4_4, projet4_5, projet4_6, projet4_7, projet4_8], // Un projet peut n'avoir qu'une seule image
      description: "site web de mon portFolio realiser avec react JS et Tailwind CSS . ",
    },
    {
      id: 5,
      title: "Plateforme Prestations Sociales",
      images: [projet5_1, projet5_2, projet5_3, projet5_4, projet5_5],
      description: "Gestion des Pensions des personnes (Veuve/Retraiter) realiser avec le langage Javascript, html, bootstrap et php pour le backend . ",
    },
    {
      id: 6,
      title: "CRM Vente Produit",
      images: [projet6_1, projet6_2, projet6_3],
      description: "Application de gestion des Produits realiser avec react JS et Laravel. ",
    },

  ];

  const projetsDupliques = [...projets, ...projets];

  return (

    <>     
    
      <section id="projets" className="py-1 bg-gray-300/50 dark:bg-gray-900  rounded-lg overflow-hidden ">

        <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 mt-12 text-[#64748b] dark:text-gray-200"
      >
        MES <span className="text-green-500">PROJETS</span>
      </motion.h2>

        <div className="relative w-full overflow-hidden py-10">
          
            <div className="flex items-center whitespace-nowrap animate-marquee">
                
                {projetsDupliques.map((projet, index) => (
                
                    <div 
                        key={`${projet.id}-${index}`} 
                        className="flex-shrink-0 w-[350px] mx-6" 
                    >
                        <ProjetCarte projet={projet} />
                    </div>
                ))}
            </div>
        
            <div 
                className="pointer-events-none absolute inset-y-0 left-0 w-1/12 z-10 
                           bg-gradient-to-r from-gray-300 dark:from-gray-900 to-transparent"
            ></div>
            <div 
                className="pointer-events-none absolute inset-y-0 right-0 w-1/12 z-10 
                           bg-gradient-to-l from-gray-300 dark:from-gray-900 to-transparent"
            ></div>
            
        </div>
        
      </section>
   
    </>
    
  );
};

export default Projet;