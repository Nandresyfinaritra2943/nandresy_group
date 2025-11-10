import React from "react";

function Footer () {

    return (
        <>
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex flex-col bg-transparent">
                            <span className="text-blue-300 dark:text-blue-400 text-2xl font-bold tracking-widest">
                                Nandresy
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-lg block -mt-1">
                                RAZAFIMAHEFA
                            </span>
                        </div>
                    </div>
                    <div className="items-center justify-center">
                        <h4 className="font-bold mb-2"> Mes Competances </h4>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contactez-Moi</h4>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2"> A propos </h4>
                    </div>
                </div>
                <div className='border-b-2 bg-slate-500 my-6 w-auto'></div>
                <div>
                    <p className="text-sm items-center text-center"> © Nandresy RAZAFIMAHEFA 2024 </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;