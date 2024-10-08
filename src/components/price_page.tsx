// PricesPage.tsx
import React from 'react';

const PricesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Header */}
        <h1 className="text-green-600 text-2xl font-semibold mb-4">SOMMERPREISE ZELTPLÄTZE</h1>
        <p className="text-gray-700 mb-8">Leistung zu fairen Preisen</p>

        {/* Preise Tabelle */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-green-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Saisonzeiten</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Frühling</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Frühsommer</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Hauptsaison</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Spätsommer</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Herbst</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: 'Erwachsene', fruehling: '€ 12,80', fruehsommer: '€ 12,80', hauptsaison: '€ 14,20', spaetsommer: '€ 14,20', herbst: '€ 12,80' },
                { item: 'Kinder (5-14 Jahre)', fruehling: '€ 6,20', fruehsommer: '€ 6,20', hauptsaison: '€ 7,30', spaetsommer: '€ 7,30', herbst: '€ 6,20' },
                { item: 'Auto', fruehling: '€ 4,20', fruehsommer: '€ 4,20', hauptsaison: '€ 4,20', spaetsommer: '€ 4,20', herbst: '€ 4,20' },
                { item: 'Motorrad', fruehling: '€ 3,20', fruehsommer: '€ 3,20', hauptsaison: '€ 3,20', spaetsommer: '€ 3,20', herbst: '€ 3,20' },
                { item: 'Zelt', fruehling: '€ 6,20', fruehsommer: '€ 6,20', hauptsaison: '€ 7,30', spaetsommer: '€ 7,30', herbst: '€ 6,20' },
                { item: 'Wohnwagen', fruehling: '€ 9,60', fruehsommer: '€ 9,60', hauptsaison: '€ 10,50', spaetsommer: '€ 10,50', herbst: '€ 9,60' },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300">{row.item}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.fruehling}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.fruehsommer}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.hauptsaison}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.spaetsommer}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{row.herbst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-gray-100 p-6 text-center">
            <h3 className="text-green-600 text-lg font-semibold mb-4">Stornobedingungen</h3>
            <p className="text-gray-600">Stornobedingungen & Reiserücktritt</p>
            <a href="#" className="text-green-600 hover:underline block mt-4">Mehr erfahren &rsaquo;</a>
          </div>
          <div className="bg-gray-100 p-6 text-center">
            <h3 className="text-green-600 text-lg font-semibold mb-4">Gut zu wissen</h3>
            <p className="text-gray-600">Buchungsinformationen & AGB</p>
            <a href="#" className="text-green-600 hover:underline block mt-4">Mehr erfahren &rsaquo;</a>
          </div>
          <div className="bg-gray-100 p-6 text-center">
            <h3 className="text-green-600 text-lg font-semibold mb-4">Angebote</h3>
            <p className="text-gray-600">Pauschalen für Urlaub im Grünen!</p>
            <a href="#" className="text-green-600 hover:underline block mt-4">Mehr erfahren &rsaquo;</a>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-green-600 text-white py-10 mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Bestpreis direkt buchen</h2>
          <p className="max-w-2xl mx-auto mb-6">Senden Sie uns Ihre unverbindliche Anfrage für einen erholsamen Campingurlaub auf der Saalach Wiese und wir werden uns mit den besten Angeboten bei Ihnen melden!</p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 transition">
            UNVERBINDLICHE ANFRAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
