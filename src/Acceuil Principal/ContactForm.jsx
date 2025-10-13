import React from "react";

function ContactForm () {

    return (
        <>
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="flex text-gray-600 text-sm font-bold mb-2"> Nom et Prénom </label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Nom et Prénom" />
                </div>
                <div className="mb-4">
                    <label className="flex text-gray-600 text-sm font-bold mb-2"> Email </label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <label className="flex text-gray-600 text-sm font-bold mb-2"> Téléphone </label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Téléphone" />
                </div>
                <div className="mb-4">
                    <label className="flex text-gray-600 text-sm font-bold mb-2"> Message </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " rows="4"  id="message" placeholder="Message"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="submit">
                        Envoyer
                    </button>
                </div>
            </form>
        </>
    )
}
export default ContactForm;