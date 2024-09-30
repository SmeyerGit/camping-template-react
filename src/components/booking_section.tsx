import React, { useState } from 'react';

const BookingSection: React.FC = () => {
  const [arrivalDate, setArrivalDate] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');

  const handleBooking = () => {
    if (arrivalDate && departureDate) {
      alert(`Buchung von ${arrivalDate} bis ${departureDate} wurde bestätigt!`);
    } else {
      alert('Bitte wählen Sie Ankunfts- und Abreisedatum aus.');
    }
  };

  return (
    <section id="book" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Buchen Sie Ihren Aufenthalt</h2>
        <div className="space-y-4 md:flex md:space-y-0 md:space-x-4 justify-center">
          <input
            type="date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            className="p-2 border border-gray-300 w-full md:w-auto"
          />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="p-2 border border-gray-300 w-full md:w-auto"
          />
          <button onClick={handleBooking} className="bg-green-600 text-white py-2 px-6 rounded-lg">
            Jetzt buchen
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
