import React, {useState, useEffect} from "react";

function ProjetCarte ({ projet }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect (() => {
        if ( projet.images.length > 1 )
        {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % projet.images.length
                );
            }, 3000); 
            
            return () => clearInterval(intervalId);
        }
    },[projet.images.length]);

    return (
      
        <div className="bg-white dark:bg-gray-800 p-4 shadow-xl rounded-lg transform transition duration-300 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden">
            
            <div className="w-full h-48 overflow-hidden rounded-md mb-4 shadow-inner">
                <img 
                    src={projet.images[currentImageIndex]} 
                    alt={`Image de ${projet.title}`} 
                    className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
                />
            </div>
          
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projet.title}</h3>

            <p className="text-gray-600 dark:text-gray-400 flex-grow whitespace-pre-wrap">
                {projet.description}
            </p>
        
        </div>
        
    )
}
export default ProjetCarte