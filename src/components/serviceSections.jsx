import React from "react";

function ServiceSections ({ title, description, image, reverse }) {

    return (
        <section className="py-12">
            <div
                className={`container mx-auto flex flex-col md:flex-row items-center px-6 gap-8 ${
                    reverse ? "md:flex-row-reverse" : ""
                }`}
            >
                {/* image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={image}
                        alt={title} 
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
                {/* texte */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4"> {title} </h2>
                    <p className="text-gray-700 mb-6">{description}</p>
                    <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white font-semibold">
                        En savoir plus
                    </button>
                </div>
            </div>
        </section>
    )
}
export default ServiceSections