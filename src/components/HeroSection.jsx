import React from "react";
import sariko from "../assets/sariko.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <motion.section
      id="HeroSection"
      variants={container}
      initial="hidden"
      animate="visible"
      className="dark:bg-gray-900 bg-gray-200  text-white min-h-screen flex items-center py-5 overflow-hidden"
    >
      <style>
        {`
        @keyframes color-change {
          0% { color: #3b82f6; }
          25% { color: #f97316; }
          50% { color: #ef4444; }
          75% { color: #22c55e; }
          100% { color: #3b82f6; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        `}
      </style>

      <motion.div
        variants={container}
        className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between"
      >
      
        <motion.div
          variants={fadeIn}
          className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12"
        >
          <motion.h1
            variants={fadeUp}
            className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-gray-700 dark:text-gray-200"
          >
            Je suis{" "}
            <span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]">
              Nandresy Finaritra RAZAFIMAHEFA
            </span>
            ,
            <br />
            un{" "}
            <span className="text-green-600 dark:text-green-400">
              développeur web Fullstack
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-xl"
          >
            J'aime concevoir des interfaces élégantes avec <b> React </b> et <b> Tailwind </b>, puis leur donner vie grace à <b>Symfony</b>. <br />
            Ce qui me motive ? Créer des applications web fluides, modernes et utiles, qui rendent chaque interaction plus agréable et intelligente.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#Contact"
              className=" mx-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Contactez-moi !
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projets"
              className=" mx-auto border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Voir mes projets
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="lg:w-1/2 flex justify-center relative overflow-hidden"
        >
        
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: -30 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 blur-2xl z-0"
            style={{
              clipPath: "polygon(25% 0%, 100% 50%, 75% 100%, 0% 50%)",
            }}
          />
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 30 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 blur-2xl z-0"
            style={{
              clipPath: 'polygon(25% 0%, 100% 50%, 75% 100%, 0% 50%)', 
            }}
          />

          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 filter blur-2xl transform scale-150 -rotate-30 z-0"
                style={{ 
                    clipPath: 'polygon(25% 0%, 100% 50%, 75% 100%, 0% 50%)', 
                }}>
            </div>
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 filter blur-2xl transform scale-150 -rotate-30 z-0"
                style={{ 
                    clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 50%)', 
                }}>
            </div>

          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative z-10 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-2xl"
          >
            <img
              src={sariko}
              alt="Nandresy Finaritra RAZAFIMAHEFA"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;






































// import React from "react";
// import sariko from "../assets/sariko.jpg"
// import { motion } from "framer-motion";

// const HeroSection = () => {

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//             staggerChildren: 0.7,
//             },
//         },
//     };
//     const containerVariants1 = {
//         hidden: { 
//             opacity: 0,
//             transition: 20,
//          },
//         visible: {
//             opacity: 1,
//             transition: 20,
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0,  x:0 },
//         visible: { opacity: 1, x:20 },
//     };
//     const itemVariants2 = {
//         hidden: { opacity: 0,  x:20 },
//         visible: { opacity: 1, x:0 },
//     };
//     const itemVariantsMonter = {
//         hidden: { opacity: 0,  y:20 },
//         visible: { opacity: 1, y:0 },
//     };
//     const itemVariantsDescend = {
//         hidden: { opacity: 0,  y:0 },
//         visible: { opacity: 1, y:20 },
//     };

//     return (
     
//         <motion.section  initial={{opacity: 0}} animate={{opacity: 1}} id="HeroSection" className="dark:bg-gray-900 bg-gray-200 text-white min-h-screen flex items-center py-5 overflow-hidden"> 
    

//         <style>
//             {`
//             @keyframes color-change {
//                 0% { color: #3b82f6; } /* blue-500 */
//                 25% { color: #f97316; } /* orange-500 */
//                 50% { color: #ef4444; } /* red-500 */
//                 75% { color: #22c55e; } /* green-500 */
//                 100% { color: #3b82f6; }
//             }
//             @keyframes bounce-slow {
//                 0%, 100% { transform: translateY(0); }
//                 50% { transform: translateY(-5px); }
//             }
//             `}
//         </style>


//             <motion.div 
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

//                 <motion.div 
//                     variants={itemVariantsDescend}
                
//                     className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            
//                     <motion.h1 
//                         variants={itemVariants}
//                         className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-gray-700 dark:text-gray-200">
//                         Je suis <span className="inline-block animate-[color-change_5s_infinite_alternate] animate-[bounce-slow_3s_infinite_ease-in-out]"> Nandresy Finaritra RAZAFIMAHEFA</span>,
//                         <br />un <span className="text-green-600 dark:text-green-400">développeur web Fullstack</span>
//                     </motion.h1>

//                     <motion.p 
//                         variants={itemVariants2}
//                         className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-xl">
//                         Je conçois des interfaces utilisateur pour les sites Web et les transforme en sites Web entièrement fonctionnels en utilisant JavaScript et ses frameworks.
//                     </motion.p>

//                     <motion.div 
//                         variants={itemVariantsMonter}
//                         className="mt-10 flex flex-wrap gap-4"> 

//                         <a
//                         href="#Contact"
//                         className="bg-green-500 hover:bg-green-600 text-white dark:text-gray-600 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
//                         >
//                         Contactez-moi !
//                         </a>

//                         <a
//                         href="#projets"
//                         className="border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white dark:hover:text-gray-300 font-bold py-3 px-8 rounded-lg transition duration-300"
//                         >
//                         Voir mes projets
//                         </a>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div 
//                     variants={itemVariantsMonter}
    
//                     className="lg:w-1/2 flex justify-center relative overflow-hidden"> 
            
//                     <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 filter blur-2xl transform scale-150 -rotate-30 z-0"
//                         style={{ 
//                             clipPath: 'polygon(25% 0%, 100% 50%, 75% 100%, 0% 50%)', 
//                         }}>
//                     </div>
//                     <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full opacity-60 filter blur-2xl transform scale-150 -rotate-30 z-0"
//                         style={{ 
//                             clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 50%)', 
//                         }}>
//                     </div>
        
//                     <div className="relative z-10 p-1 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-2xl">
//                         <div className="absolute inset-0 bg-gray-50/30"></div>
//                         <img
//                             src={sariko}
//                             alt="Nandresy Finaritra RAZAFIMAHEFA" 
//                             className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
//                         />
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </motion.section>
//     )
// }
// export default HeroSection