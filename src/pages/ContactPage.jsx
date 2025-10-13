import React from "react";
import ContactForm from "../Acceuil Principal/ContactForm";
import GoogleMap from "../Acceuil Principal/Map";

function ContactPage () {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl text-gray-500 font-bold text-center mb-8"> <u>Contactez-nous</u> !</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
                <div className="md:w-1/2">
                    <GoogleMap />
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <h3 className="font-bold text-lg mb-2">SprayAcad Madagascar</h3>
                        <p className="text-sm">Du Lundi au Vendredi</p>
                        <p className="text-sm">De 08h - 12h</p>
                        <p className="text-sm">De 14h - 18h</p>
                        <p className="text-sm mt-2">+261 38 73 306 27</p>
                        <p className="text-sm">www.sprayacad.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;