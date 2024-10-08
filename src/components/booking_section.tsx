import React, { useState, useEffect } from 'react';

// Funktion zum Formatieren eines Datums als "YYYY-MM-DD"
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Monat ist 0-basiert
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Funktion zum Hinzufügen von Tagen zu einem Datum
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const BookingSection: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');
  

  // Setze das Ankunfts- und Abreisedatum bei der Initialisierung
  useEffect(() => {
    const today = new Date();
    const formattedToday = formatDate(today);
    const departure = formatDate(addDays(today, 7)); // Abreisedatum 7 Tage später

   
    setArrivalDate(formattedToday); // Setze das Ankunftsdatum auf heute
    setDepartureDate(departure); // Setze das Abreisedatum auf 7 Tage später
  }, []);

  const handleBooking = () => {
    if (arrivalDate && departureDate) {
      alert(`Buchung von ${arrivalDate} bis ${departureDate} bestätigt!`);
    } else {
      alert('Bitte wählen Sie ein Ankunfts- und Abreisedatum aus.');
    }
  };

  return (
    <section id="book" className="py-12 bg-green-600 text-center">
      <h2 className="text-3xl text-gray-100 font-bold mb-6">Buchen Sie Ihren Aufenthalt</h2>
      <div className="space-y-4 md:flex md:space-y-0 md:space-x-4 justify-center">
        <div>
          <label className="text-lg text-gray-100 font-bold px-2" htmlFor="arrival">Ankunft:</label>
          <input
            type="date"
            id="arrival"
            value={arrivalDate}
            onChange={(e) => {
              const newArrivalDate = e.target.value;
              setArrivalDate(newArrivalDate);
              // Setze das Abreisedatum neu, wenn das Ankunftsdatum geändert wird
              setDepartureDate(formatDate(addDays(new Date(newArrivalDate), 7)));
            }}
            className="p-2  bg-green-300 w-full md:w-auto"
          />
        </div>
        <div>
          <label className="text-lg text-gray-100 font-bold px-2" htmlFor="departure">Abreise:</label>
          <input
            type="date"
            id="departure"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="p-2  bg-green-300 w-full md:w-auto"
          />
        </div>
        <button
          onClick={handleBooking}
          className="bg-white text-green-800 font-bold py-2 px-6 rounded-lg"
        >
          Jetzt buchen
        </button>
      </div>
    </section>
  );
};

export default BookingSection;
