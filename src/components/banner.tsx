import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-green-600 text-white py-10 mt-10 text-center ">
          <h2 className="text-2xl font-semibold mb-4">Bestpreis direkt buchen</h2>
          <p className="max-w-2xl mx-auto mb-6">Senden Sie uns Ihre unverbindliche Anfrage für einen erholsamen Campingurlaub auf der Saalach Wiese und wir werden uns mit den besten Angeboten bei Ihnen melden!</p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 transition">
            UNVERBINDLICHE ANFRAGE
          </button>
        </div>

    );};
    
export default Banner;
