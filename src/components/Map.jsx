import React from "react";

function GoogleMap () {

    return (
        <div className="relative w-full rounded-lg h-80 overflow-hidden shadow-md">
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.249219665792!2d47.53099711497918!3d-18.91427808715848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07f4d994e43e9%3A0x6795f543e493b8e8!2sSRA%20MADAGASCAR!5e0!3m2!1sfr!2smg!4v1662499252329!5m2!1sfr!2smg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map SRA Madagascar"
            ></iframe> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191252.12658897008!2d47.01166668388484!3d21.44211600395662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213e4811a4f00d3%3A0x6e8a00508a68b00!2sFianarantsoa%2C%20Madagascar!5e0!3m2!1sfr!2s!4v1701358327318!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
export default GoogleMap;