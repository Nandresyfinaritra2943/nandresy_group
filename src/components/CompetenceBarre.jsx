import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CompetenceBarre({ nom, pourcentage, Icone }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const barreCouleur =
    pourcentage >= 90
      ? "from-green-400 to-emerald-500"
      : pourcentage >= 85
      ? "from-yellow-400 to-amber-500"
      : "from-red-400 to-pink-500";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-5 group"
    >
   
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icone && <Icone className="text-white text-2xl" />}
          <span className="text-white font-semibold">{nom}</span>
        </div>
        <span className="text-white/90 font-bold text-sm">
          {pourcentage}%
        </span>
      </div>

      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden relative">
        <motion.div
          className={`h-3 rounded-full bg-gradient-to-r ${barreCouleur} shadow-lg`}
          initial={{ width: 0 }}
          animate={{
            width: isInView ? `${pourcentage}%` : 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </motion.div>
  );
}











// import React from 'react';

// function CompetenceBarre ({ nom, pourcentage, Icone }) { 
//     // Calcule la couleur de la barre en fonction du pourcentage
//     const barreCouleur = pourcentage >= 90 ? 'bg-green-400' : 
//                          pourcentage >= 85 ? 'bg-yellow-400' : 
//                          'bg-red-400';

//     return (
//         <div className="mb-4">
//             <div className="flex justify-between items-center mb-1">
//                 {/* Icône et Nom */}
//                 <div className="flex items-center text-white">
//                     {/* *** MODIFICATION ICI : On utilise le composant Icone directement *** */}
//                     {Icone && <Icone className="w-5 h-5 mr-2 text-white" />} 
//                     <span className="font-medium text-white">{nom}</span>
//                 </div>
                
//                 {/* Pourcentage */}
//                 <span className="text-sm font-semibold text-white">{pourcentage}%</span>
//             </div>

//             {/* La Barre de Progression */}
//             <div className="w-full bg-white/30 rounded-full h-2.5">
//                 <div 
//                     className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${barreCouleur}`} 
//                     style={{ width: `${pourcentage}%` }}
//                 ></div>
//             </div>
//         </div>
//     );
// }

// export default CompetenceBarre;