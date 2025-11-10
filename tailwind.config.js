// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  // ✅ CORRIGÉ : Active le support du mode sombre basé sur la classe 'dark'
  darkMode: 'class', 
  
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // 'marquee' : Nom de l'animation. 40s : Durée. linear : Vitesse constante. infinite : Répétition sans fin.
        marquee: 'marquee 40s linear infinite', 
    },
     keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          // Déplace l'élément de 100% de sa largeur vers la gauche
          '100%': { transform: 'translateX(-100%)' }, 
        },
      },
      // FIN DU BLOC À AJOUTER
  },
  plugins: [],
}


// theme: {
//     extend: {
//       // AJOUTEZ CE BLOC
//       animation: {
//         // 'marquee' : Nom de l'animation. 40s : Durée. linear : Vitesse constante. infinite : Répétition sans fin.
//         marquee: 'marquee 40s linear infinite', 
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           // Déplace l'élément de 100% de sa largeur vers la gauche
//           '100%': { transform: 'translateX(-100%)' }, 
//         },
//       },
//       // FIN DU BLOC À AJOUTER
//     },
//   },
//   plugins: [],
}