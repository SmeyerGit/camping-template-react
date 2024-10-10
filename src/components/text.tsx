// ComfortSection.tsx
import React from 'react';

const ComfortSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <div>
          <h2 className="text-green-600 text-xl font-semibold mb-4">
            CAMPING IM ERHOLSAMEN SPREEWALD
          </h2>
          <p className="text-gray-700 mb-4">
            Im Streusiedlungsgebiet von Burg befindet sich eine ca. 20.000 m² große dreieckige Insel in ruhiger und uriger Lage, umrahmt von alten Erlen, an einem Nebenarm der Spree. Der Zeltplatz wird im Osten von den Fließen "Ostgraben" im Süden und Westen vom "Krummes Fließ" und von Norden durch einen Graben, der beide Fließe miteinander verbindet begrenzt. Die Insel ist für Besucher über eine kleine Brücke erreichbar. Für Wasserwanderer steht eine Anlegestelle zur Verfügung. Hier können Boote ein- und ausgesetzt als auch gemietet werden. Wer nicht selber paddeln möchte, kann sich auch mit dem Spreewaldkahn staken lassen. </p>
        </div>
        <div>
          <h2 className="text-green-600 text-xl font-semibold mb-4">
            In der Nähe
          </h2>
          <p className="text-gray-700 mb-4">
          In unmittelbarer Nähe befindet sich ein Radweg, der sich auch zum Skaten eignet. In ca. 3.5 km Entfernung befindet sich die Spreewaldtherme, einem Solebad, das aus einer Tiefe von 1350 m entspringt. Vor der Insel stehen Ihnen kostenlose Parkplätze zur Verfügung. 
          </p>
          <p className="text-gray-700 mb-4">
          Auf Grund bescheidener Kapazitäten empfehlen wir Ihnen Zelltstellplätze und Bootsanmietung vorher zu reservieren.
          Wir würden uns freuen Sie herzlichst begrüßen zu können.          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            GÄSTESTIMMEN &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
