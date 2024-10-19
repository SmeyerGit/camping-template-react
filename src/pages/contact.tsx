import React, { useState } from 'react';

const Kontakt: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [persons, setPersons] = useState(1);
  const [inquiryType, setInquiryType] = useState('Reservierung');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hier kannst du die Logik für das Absenden der Nachricht einfügen
    console.log({
      name,
      email,
      phone,
      arrivalDate,
      departureDate,
      persons,
      inquiryType,
      message,
    });

    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      

      {/* Kontaktformular */}
      <main className="container mx-auto py-12 px-4">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ihr Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* E-Mail */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Ihre E-Mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Telefonnummer */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Ankunftsdatum */}
            <div className="mb-4">
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">Ankunftsdatum</label>
              <input
                type="date"
                id="arrivalDate"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Abreisedatum */}
            <div className="mb-4">
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">Abreisedatum</label>
              <input
                type="date"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* Anzahl der Personen */}
            <div className="mb-4">
              <label htmlFor="persons" className="block text-sm font-medium text-gray-700">Anzahl der Personen</label>
              <input
                type="number"
                id="persons"
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                required
                min="1"
              />
            </div>

            {/* Art der Anfrage */}
            <div className="mb-4">
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">Art der Anfrage</label>
              <select
                id="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="Reservierung">Reservierung</option>
                <option value="Allgemeine Frage">Allgemeine Frage</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            {/* Nachricht */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Ihre Nachricht</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                rows={5}
                required
              />
            </div>

            {/* Senden Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Nachricht senden
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Vielen Dank für Ihre Nachricht!</h2>
            <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
          </div>
        )}
      </main>

      
    </div>
  );
};

export default Kontakt;
