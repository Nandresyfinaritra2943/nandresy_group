import React from "react";
import { motion } from "framer-motion";
import CompetenceBarre from "./CompetenceBarre";

// Icônes
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiPython,
  DiMysql,
  DiPostgresql,
  DiSqllite,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiSymfony,
  SiDocker,
  SiGithub,
  SiUml,
} from "react-icons/si";
import {
  FaPhp,
  FaGitAlt,
  FaGitlab,
  FaSitemap,
  FaProjectDiagram,
} from "react-icons/fa";

function Competences() {
  // 🧠 Données structurées par catégorie
  const categories = [
    {
      titre: "Frontend",
      couleur: "from-blue-600 to-indigo-700",
      data: [
        { nom: "React JS", pourcentage: 90, Icone: DiReact },
        { nom: "JavaScript", pourcentage: 90, Icone: DiJavascript1 },
        { nom: "HTML", pourcentage: 95, Icone: DiHtml5 },
        { nom: "CSS", pourcentage: 85, Icone: DiCss3 },
        { nom: "Tailwind CSS", pourcentage: 90, Icone: SiTailwindcss },
      ],
    },
    {
      titre: "Frameworks & Backend",
      couleur: "from-pink-600 to-purple-700",
      data: [
        { nom: "JAVA", pourcentage: 85, Icone: DiJava },
        { nom: "Python", pourcentage: 80, Icone: DiPython },
        { nom: "PHP", pourcentage: 80, Icone: FaPhp },
        { nom: "Laravel", pourcentage: 80, Icone: SiLaravel },
        { nom: "Symfony", pourcentage: 85, Icone: SiSymfony },
      ],
    },
    {
      titre: "Bases de données",
      couleur: "from-teal-600 to-cyan-700",
      data: [
        { nom: "MySQL", pourcentage: 85, Icone: DiMysql },
        { nom: "PostgreSQL", pourcentage: 90, Icone: DiPostgresql },
        { nom: "Sqllite", pourcentage: 80, Icone: DiSqllite },
      ],
    },
    {
      titre: "DevOps & Outils",
      couleur: "from-orange-500 to-yellow-600",
      data: [
        { nom: "Docker", pourcentage: 60, Icone: SiDocker },
        { nom: "GitHub/Git", pourcentage: 90, Icone: FaGitAlt },
        { nom: "GitLab", pourcentage: 85, Icone: FaGitlab },
        { nom: "MS Project", pourcentage: 85, Icone: FaProjectDiagram },
      ],
    },
    {
      titre: "Méthodologies",
      couleur: "from-slate-500 to-gray-700",
      data: [
        { nom: "Agile", pourcentage: 65, Icone: null },
        { nom: "UML", pourcentage: 70, Icone: SiUml },
        { nom: "Merise", pourcentage: 90, Icone: FaSitemap },
      ],
    },
  ];

  // ✨ Variants Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
  };

  return (
    <motion.section
      id="competences"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 👀 apparition au scroll
      variants={sectionVariants}
      className="py-20 bg-gray-100 dark:bg-gray-800"
    >
      {/* ---------- TITRE ---------- */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#64748b] dark:text-gray-200"
      >
        MES <span className="text-green-500">COMPÉTENCES</span>
      </motion.h2>

      {/* ---------- CONTENU ---------- */}
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              rotate: 1,
              transition: { type: "spring", stiffness: 150 },
            }}
            className={`bg-gradient-to-br ${cat.couleur} p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition duration-300 cursor-pointer`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/30 pb-2 text-center">
              {cat.titre}
            </h3>

            <div className="space-y-4">
              {cat.data.map((comp, j) => (
                <CompetenceBarre
                  key={j}
                  nom={comp.nom}
                  pourcentage={comp.pourcentage}
                  Icone={comp.Icone}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Competences;


























// // Fichier : Competences.jsx

// import React from "react";
// import { motion } from "framer-motion";
// import CompetenceBarre from "./CompetenceBarre";

// // Importation des icônes
// import {
//   DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiPython,
//   DiMysql, DiPostgresql, DiSqllite, DiJava
// } from "react-icons/di";
// import {
//   SiTailwindcss, SiDjango, SiLaravel, SiSymfony, SiDocker, SiGithub, SiUml
// } from "react-icons/si";
// import { FaPhp, FaGitAlt, FaGitlab, FaSitemap, FaProjectDiagram } from "react-icons/fa";

// function Competences() {
//   const categories = [
//     {
//       titre: "Frontend",
//       couleur: "from-blue-600 to-indigo-700",
//       data: [
//         { nom: "React JS", pourcentage: 90, Icone: DiReact },
//         { nom: "JavaScript", pourcentage: 90, Icone: DiJavascript1 },
//         { nom: "HTML", pourcentage: 95, Icone: DiHtml5 },
//         { nom: "CSS", pourcentage: 85, Icone: DiCss3 },
//         { nom: "Tailwind CSS", pourcentage: 90, Icone: SiTailwindcss },
//       ],
//     },
//     {
//       titre: "Frameworks & Backend",
//       couleur: "from-pink-600 to-purple-700",
//       data: [
//         { nom: "JAVA", pourcentage: 85, Icone: DiJava },
//         { nom: "Python", pourcentage: 80, Icone: DiPython },
//         { nom: "PHP", pourcentage: 80, Icone: FaPhp },
//         { nom: "Laravel", pourcentage: 80, Icone: SiLaravel },
//         { nom: "Symfony", pourcentage: 85, Icone: SiSymfony },
//       ],
//     },
//     {
//       titre: "Bases de données",
//       couleur: "from-teal-600 to-cyan-700",
//       data: [
//         { nom: "MySQL", pourcentage: 85, Icone: DiMysql },
//         { nom: "PostgreSQL", pourcentage: 90, Icone: DiPostgresql },
//         { nom: "Sqllite", pourcentage: 80, Icone: DiSqllite },
//       ],
//     },
//     {
//       titre: "DevOps & Outils",
//       couleur: "from-orange-500 to-yellow-600",
//       data: [
//         { nom: "Docker", pourcentage: 60, Icone: SiDocker },
//         { nom: "GitHub/Git", pourcentage: 90, Icone: FaGitAlt },
//         { nom: "GitLab", pourcentage: 85, Icone: FaGitlab },
//         { nom: "MS Project", pourcentage: 85, Icone: FaProjectDiagram },
//       ],
//     },
//     {
//       titre: "Méthodologies",
//       couleur: "from-slate-500 to-gray-700",
//       data: [
//         { nom: "Agile", pourcentage: 65 },
//         { nom: "UML", pourcentage: 70, Icone: SiUml },
//         { nom: "Merise", pourcentage: 90, Icone: FaSitemap },
//       ],
//     },
//   ];

//   // --- VARIANTS optimisés ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 12,
//       },
//     },
//   };

//   return (
//     <motion.section
//       id="competences"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="py-16 bg-gray-100 dark:bg-gray-800"
//     >
//       <motion.h2
//         className="text-3xl font-bold text-center mb-12 text-[#64748b]"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 80, damping: 10 }}
//       >
//         MES COMPÉTENCES
//       </motion.h2>

//       <motion.div
//         variants={containerVariants}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {categories.map((cat, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className={`bg-gradient-to-br ${cat.couleur} p-6 rounded-xl shadow-2xl`}
//           >
//             <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/40 pb-2">
//               {cat.titre}
//             </h3>
//             {cat.data.map((comp) => (
//               <CompetenceBarre
//                 key={comp.nom}
//                 nom={comp.nom}
//                 pourcentage={comp.pourcentage}
//                 Icone={comp.Icone}
//               />
//             ))}
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Competences;









































// import React from "react";
// import { motion } from "framer-motion";
// import CompetenceBarre from "./CompetenceBarre";

// import {
//   DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiPython,
//   DiMysql, DiPostgresql, DiSqllite, DiJava,
// } from "react-icons/di";
// import {
//   SiTailwindcss, SiLaravel, SiSymfony, SiDocker, SiGithub, SiUml,
// } from "react-icons/si";
// import { FaPhp, FaGitAlt, FaGitlab, FaSitemap, FaProjectDiagram } from "react-icons/fa";

// function Competences() {
//   const categories = [
//     {
//       titre: "Frontend",
//       couleur: "from-blue-600 to-indigo-700",
//       data: [
//         { nom: "React JS", pourcentage: 90, Icone: DiReact },
//         { nom: "JavaScript", pourcentage: 90, Icone: DiJavascript1 },
//         { nom: "HTML", pourcentage: 95, Icone: DiHtml5 },
//         { nom: "CSS", pourcentage: 85, Icone: DiCss3 },
//         { nom: "Tailwind CSS", pourcentage: 90, Icone: SiTailwindcss },
//       ],
//     },
//     {
//       titre: "Frameworks & Backend",
//       couleur: "from-pink-600 to-purple-700",
//       data: [
//         { nom: "JAVA", pourcentage: 85, Icone: DiJava },
//         { nom: "Python", pourcentage: 80, Icone: DiPython },
//         { nom: "PHP", pourcentage: 80, Icone: FaPhp },
//         { nom: "Laravel", pourcentage: 80, Icone: SiLaravel },
//         { nom: "Symfony", pourcentage: 85, Icone: SiSymfony },
//       ],
//     },
//     {
//       titre: "Bases de données",
//       couleur: "from-teal-600 to-cyan-700",
//       data: [
//         { nom: "MySQL", pourcentage: 85, Icone: DiMysql },
//         { nom: "PostgreSQL", pourcentage: 90, Icone: DiPostgresql },
//         { nom: "Sqllite", pourcentage: 80, Icone: DiSqllite },
//       ],
//     },
//     {
//       titre: "DevOps & Outils",
//       couleur: "from-orange-500 to-yellow-600",
//       data: [
//         { nom: "Docker", pourcentage: 60, Icone: SiDocker },
//         { nom: "GitHub/Git", pourcentage: 90, Icone: FaGitAlt },
//         { nom: "GitLab", pourcentage: 85, Icone: FaGitlab },
//         { nom: "MS Project", pourcentage: 85, Icone: FaProjectDiagram },
//       ],
//     },
//     {
//       titre: "Méthodologies",
//       couleur: "from-slate-500 to-gray-700",
//       data: [
//         { nom: "Agile", pourcentage: 65, Icone: null },
//         { nom: "UML", pourcentage: 70, Icone: SiUml },
//         { nom: "Merise", pourcentage: 90, Icone: FaSitemap },
//       ],
//     },
//   ];

//   // 💫 Variants optimisés
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3, delayChildren: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.section
//       id="competences"
//       className="py-16 bg-gray-100 dark:bg-gray-900"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }} // 👈 apparition au scroll
//       variants={sectionVariants}
//     >
//       <h2 className="text-3xl font-bold text-center mb-12 text-[#64748b] dark:text-green-400">
//         MES COMPÉTENCES
//       </h2>

//       <motion.div
//         variants={containerVariants}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <motion.div
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {categories.map((cat, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               className={`bg-gradient-to-br ${cat.couleur} p-6 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02]`}
//             >
//               <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/40 pb-2">
//                 {cat.titre}
//               </h3>

//               {/* Animation des barres internes */}
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {cat.data.map((comp) => (
//                   <motion.div
//                     key={comp.nom}
//                     variants={{
//                       hidden: { opacity: 0, x: -20 },
//                       visible: {
//                         opacity: 1,
//                         x: 0,
//                         transition: { duration: 0.4 },
//                       },
//                     }}
//                   >
//                     <CompetenceBarre
//                       nom={comp.nom}
//                       pourcentage={comp.pourcentage}
//                       Icone={comp.Icone}
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Competences;































// // // Fichier : Competences.jsx

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import CompetenceBarre from './CompetenceBarre';

// // // Importation des icônes spécifiques de la bibliothèque 'react-icons'
// // // Utilisez Di pour Devicons, Fa pour Font Awesome, Si pour Simple Icons, etc.
// // import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiPython, DiMysql, DiPostgresql, DiSqllite, DiJava } from 'react-icons/di';
// // import { SiTailwindcss, SiExpress, SiDjango, SiLaravel, SiSymfony , SiDocker, SiGithub, SiUml } from 'react-icons/si';
// // import { FaPhp, FaGitAlt, FaGitlab , FaSitemap, FaProjectDiagram } from 'react-icons/fa'; // Fa pour Font Awesome (pour PHP et Git par exemple)
// // // import { DiCsharp } from 'react-icons/di';


// // function Competences() {
// //     const categories = [
// //         {
// //             titre: "Frontend",
// //             couleur: "from-blue-600 to-indigo-700",
// //             data: [
// //                 // *** On passe le composant d'icône (ex: DiReact) directement dans la prop 'Icone' ***
// //                 { nom: "React JS", pourcentage: 90, Icone: DiReact },
// //                 { nom: "JavaScript", pourcentage: 90, Icone: DiJavascript1 },
// //                 { nom: "HTML", pourcentage: 95, Icone: DiHtml5 },
// //                 { nom: "CSS", pourcentage: 85, Icone: DiCss3 },
// //                 { nom: "Tailwind CSS", pourcentage: 90, Icone: SiTailwindcss },
// //             ]
// //         },
// //         {
// //             titre: "Frameworks & Backend",
// //             couleur: "from-pink-600 to-purple-700",
// //             data: [
// //                 { nom: "JAVA", pourcentage: 85, Icone: DiJava },
// //                 // { nom: "C#", pourcentage: 80, Icone: DiCsharp },
// //                 // { nom: "Express JS", pourcentage: 85, Icone: SiExpress },
// //                 { nom: "Python", pourcentage: 80, Icone: DiPython },
// //                 { nom: "PHP", pourcentage: 80, Icone: FaPhp },
// //                 { nom: "Laravel", pourcentage: 80, Icone: SiLaravel },
// //                 { nom: "Symfony", pourcentage: 85, Icone: SiSymfony },
// //             ]
// //         },
// //         {
// //             titre: "Bases de données",
// //             couleur: "from-teal-600 to-cyan-700",
// //             data: [
// //                 { nom: "MySQL", pourcentage: 85, Icone: DiMysql },
// //                 { nom: "PostgreSQL", pourcentage: 90, Icone: DiPostgresql },
// //                 { nom: "Sqllite", pourcentage: 80, Icone: DiSqllite },
// //             ]
// //         },
// //         {
// //             titre: "DevOps & Outils",
// //             couleur: "from-orange-500 to-yellow-600",
// //             data: [
// //                 { nom: "Docker", pourcentage: 60, Icone: SiDocker },
// //                 { nom: "GitHub/Git", pourcentage: 90, Icone: FaGitAlt },
// //                 { nom: "GitLab", pourcentage: 85, Icone: FaGitlab },
// //                 { nom: "MS Project", pourcentage: 85, Icone: FaProjectDiagram },
// //             ]
// //         },
// //         // J'ai renommé ceci pour correspondre au design vu
// //         {
// //             titre: "Méthodologies", 
// //             couleur: "from-slate-500 to-gray-700",
// //             data: [
// //                 { nom: "Agile", pourcentage: 65, Icone: null }, // Pas d'icône spécifique
// //                 { nom: "UML", pourcentage: 70, Icone: SiUml },
// //                 { nom: "Merise", pourcentage: 90, Icone: FaSitemap },
// //             ]
// //         },
// //     ];

// //     const containerVariants = {
// //         hidden: { opacity: 0 },
// //         visible: {
// //             opacity: 1,
// //             transition: {
// //             staggerChildren: 0.7,
// //             },
// //         },
// //     };
// //     const containerVariants1 = {
// //         hidden: { 
// //             opacity: 0,
// //             transition: 20,
// //          },
// //         visible: {
// //             opacity: 1,
// //             transition: 20,
// //         },
// //     };

// //     const itemVariants = {
// //         hidden: { opacity: 0,  x:0 },
// //         visible: { opacity: 1, x:20 },
// //     };
// //     const itemVariants2 = {
// //         hidden: { opacity: 0,  x:20 },
// //         visible: { opacity: 1, x:0 },
// //     };
// //     const itemVariantsMonter = {
// //         hidden: { opacity: 0,  y:20 },
// //         visible: { opacity: 1, y:0 },
// //     };
// //     const itemVariantsDescend = {
// //         hidden: { opacity: 0,  y:0 },
// //         visible: { opacity: 1, y:20 },
// //     };

// //     return (
// //         <motion.section 
// //             initial={{opacity: 0}} animate={{opacity: 1}}
// //             id="competences" className="py-16 bg-gray-100 dark:bg-gray-800">
// //             <h2 className="text-3xl font-bold text-center mb-12 text-[#64748b]">MES COMPÉTENCES</h2>
            
// //             <motion.div 
// //                 variants={containerVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// //                 <motion.div 
// //                     variants={itemVariantsMonter}
// //                     initial="hidden"
// //                     animate="visible"
// //                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {categories.map((cat, index) => (
// //                         <div 
// //                             key={index} 
// //                             // Style de la carte: Dégradé, coins arrondis, padding, ombre
// //                             className={`bg-gradient-to-br ${cat.couleur} p-6 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02]`}
// //                         >
// //                             <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/40 pb-2">
// //                                 {cat.titre}
// //                             </h3>
                            
// //                             {cat.data.map((comp) => (
// //                                 <CompetenceBarre 
// //                                     key={comp.nom} 
// //                                     nom={comp.nom} 
// //                                     pourcentage={comp.pourcentage} 
// //                                     Icone={comp.Icone} // MODIFIÉ : utilisation de 'Icone' au lieu de 'iconeUrl'
// //                                 />
// //                             ))}
// //                         </div>
// //                     ))}
// //                 </motion.div>
// //             </motion.div>
// //         </motion.section>
// //     );
// // }

// // export default Competences;