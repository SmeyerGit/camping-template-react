import React from 'react';

const activities = [
  {
    title: 'Kahnfahren',
    description: 'Erleben Sie ruhige und entspannte Fahrten auf dem Wasser mit einem traditionellen Kahn.',
    image: 'https://via.placeholder.com/800x400?text=Kahnfahren',
  },
  {
    title: 'Kajak',
    description: 'Für Abenteuerlustige bieten wir spannende Kajakfahrten auf unseren Flüssen und Seen.',
    image: 'https://via.placeholder.com/800x400?text=Kajak',
  },
  {
    title: 'Paddelboote',
    description: 'Genießen Sie das Wasser mit einem Paddelboot. Perfekt für Familien und Gruppen.',
    image: 'https://via.placeholder.com/800x400?text=Paddelboote',
  },
  {
    title: 'Angeln',
    description: 'Angeln ist die perfekte Freizeitaktivität, um die Ruhe der Natur zu genießen.',
    image: 'https://via.placeholder.com/800x400?text=Angeln',
  },
];

const FreizeitPage: React.FC = () => {
  return (
    <div>
      

      {/* Aktivitäten */}
      <main className="container mx-auto py-12">
        {activities.map((activity, index) => (
          <section key={index} className="mb-12">
            <div className="flex flex-col md:flex-row items-center mb-6">
              {/* Bild */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
              />
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-2">{activity.title}</h2>
                <p className="text-lg text-gray-700">{activity.description}</p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default FreizeitPage;
