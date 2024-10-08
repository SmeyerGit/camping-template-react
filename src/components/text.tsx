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
            Ein umfangreiches Zusatz- und Freizeitangebot am Campingplatz Grubhof in Salzburg mit einer <span className="text-green-600 font-semibold">modernen Infrastruktur auf höchstem Niveau</span> garantiert einen unvergesslichen Campingurlaub in Österreich. Vom Wellness- und Spa-Angebot in der Wellness-Alm, über ein uriges und gemütliches <span className="text-green-600 font-semibold">Wirtshaus</span> bis hin zum Shop, dem Café Campo und dem Freizeit- und Aktivangebot sowie der gratis Salzburger Saalachtal Card mit vielen Inklusivleistungen im Juli und August – das Angebot ist umfassend – nicht ohne Grund zählt Camping Grubhof zu den beliebtesten Campingplätzen in Österreich und Europa. Hier können Sie einerseits die Natur und die Ruhe genießen, haben aber auch jederzeit die Möglichkeit zur Aktivität und einem echten Ferienerlebnis.
          </p>
        </div>
        <div>
          <h2 className="text-green-600 text-xl font-semibold mb-4">
            4 Sterne plus Campingplatz
          </h2>
          <p className="text-gray-700 mb-4">
            Qualitäts- und Komfortverbesserungen sind am Grubhof ein laufender Prozess. Mit unserer Teilnahme an <span className="text-green-600 font-semibold">ECOCAMPING</span> verpflichten wir uns dazu, Umwelt- und Naturschutz, Sicherheit und Qualität auf unserem Platz stetig zu verbessern.
          </p>
          <p className="text-gray-700 mb-4">
            Wir sind ein ausgezeichneter ADAC-Campingplatz. Doch nicht nur der ADAC stellt uns mit 4,5 Sternen ein sehr gutes Zeugnis aus, auch die Kundenbewertungen fallen hervorragend aus – lesen Sie dazu die Bewertungen unserer Gäste.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            GÄSTESTIMMEN &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
