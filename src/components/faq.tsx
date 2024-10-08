// FAQ.tsx
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: 'Ab wann steht der Stellplatz am Anreisetag zur Verfügung?', answer: '' },
  { question: 'Bis wann steht der Stellplatz am Abreisetag zur Verfügung?', answer: '' },
  { question: 'Sind Hunde am Campingplatz erlaubt?', answer: '' },
  { question: 'Ist der Campingplatz auch im Winter geöffnet?', answer: '' },
  { question: 'Ist der Campingplatz für Familien geeignet?', answer: '' },
];

const FAQ: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Häufig gestellte Fragen</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 text-lg font-medium text-green-600 hover:text-green-800 focus:outline-none"
            >
              {item.question}
            </button>
            {selected === index && (
              <div className="p-4 text-gray-600 bg-gray-100">
                <p>{item.answer || 'Hier kommt die Antwort auf diese Frage.'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
