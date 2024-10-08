import React from 'react';

const TextSection: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Über unseren Campingplatz</h2>
      <div className="grid grid-cols-2 container mx-auto">
        <p className="text-lg leading-relaxed px-12">
          Im Streusiedlungsgebiet von Burg befindet sich eine ca. 20.000 m² große dreieckige Insel in ruhiger und uriger Lage, umrahmt von alten Erlen, an einem Nebenarm der Spree.
          Der Zeltplatz wird im Osten von den Fließen "Ostgraben" im Süden und Westen vom "Krummes Fließ" und von Norden durch einen Graben, der beide Fließe miteinander verbindet begrenzt. Die Insel ist für Besucher über eine kleine Brücke erreichbar. Für Wasserwanderer steht eine Anlegestelle zur Verfügung. Hier können Boote ein- und ausgesetzt als auch gemietet werden. Wer nicht selber paddeln möchte, kann sich auch mit dem Spreewaldkahn staken lassen.
        </p>
        <p className="text-lg leading-relaxed px-12">
          In unmittelbarer Nähe befindet sich ein Radweg, der sich auch zum Skaten eignet. In ca. 3.5 km Entfernung befindet sich die Spreewaldtherme, einem Solebad, das aus einer Tiefe von 1350 m entspringt. Vor der Insel stehen Ihnen kostenlose Parkplätze zur Verfügung. Im Sozialgebäude befinden sich Duschen und WC´s, ein Aufenthaltsraum mit überdachter Terrasse, eine Küche zur Selbstversorgung mit E-Herd, Spüle, Kühlschrank, Kaffeeautomat, Toaster und Wasserkocher.
          Bitte haben Sie Verständniss, dass wir keine Hunde aufnehmen können.
          Auf Grund bescheidener Kapazitäten empfehlen wir Ihnen Zelltstellplätze und Bootsanmietung vorher zu reservieren.
          Wir würden uns freuen Sie herzlichst begrüßen zu können.
        </p>
      </div>
      </div>
    </section>
  );
};

export default TextSection;
