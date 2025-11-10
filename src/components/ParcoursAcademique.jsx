import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function ParcoursAcademique() {
  const formations = [
    {
      annee: "2024 - 2025",
      titre: "Deuxième année de Licence à l'ENI",
      desc: "Je suis actuellement en deuxième année de formation licence en Informatique Generale.",
    },
    {
      annee: "Avrile 2025",
      titre: "Certifier en Agile",
      desc: "J'ai terminé ma formation en gestion de projet avec le thème: piloter vos projet en Agiliter chez ODC Fianarantsoa.",
    },
    {
      annee: "Novembre 2025",
      titre: "Certifier en Administration des systemes Linux",
      desc: "Realiser et obtenue sur COURSERA, un plateforme web de formation en ligne.",
    },
  ];

  return (
    <section 
      id="ParcoursAcademique" className="bg-gray-300 dark:bg-gray-950/80 text-white py-20 px-6">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#64748b] dark:text-gray-200"
      >
           🎓 Mes <span className="text-green-500">Formations</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
      
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 h-full hidden md:block"></div>

        {formations.map((f, i) => (
          <div
            key={i}
            className={`relative mb-16 flex flex-col md:flex-row ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              className={`md:w-1/2 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300 ${
                i % 2 === 0
                  ? "md:mr-auto bg-green-800/40"
                  : "md:ml-auto bg-green-700/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-green-400 w-6 h-6" />
                <h3 className="text-xl md:text-2xl font-semibold text-green-300">
                  {f.titre}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">📅 {f.annee}</p>
              <p className="text-gray-200">{f.desc}</p>
            </motion.div>

            <div className="absolute left-1/2 -translate-x-1/2 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900 top-8 hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
