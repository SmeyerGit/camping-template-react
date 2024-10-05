import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* Left Side */}
        <div>
          <h3 className="font-bold text-lg mb-4">Camping Grubhof</h3>
          <p>Familie Robert Stainer</p>
          <p>Grubhof 39</p>
          <p>5092 St. Martin bei Lofer | Österreich</p>
          <p className="mt-4">
            T: <a href="tel:+43658882370" className="underline">+43 (0) 6588 55555-0</a>
          </p>
          <p>
            E: <a href="mailto:home@grubhof.com" className="underline">info@test.com</a>
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lage & Anreise</a></li>
            <li><a href="#" className="hover:underline">Auszeichnungen</a></li>
            <li><a href="#" className="hover:underline">Gästemeinungen</a></li>
            <li><a href="#" className="hover:underline">Gutscheine</a></li>
            <li><a href="#" className="hover:underline">Newsletter Anmeldung</a></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Folge uns auf</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="#" className="hover:text-green-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="hover:text-green-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="hover:text-green-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
          <p>Besuchen Sie unsere kleine Erleninsel</p>
          <a
            href="#"
            className="inline-block bg-white text-green-600 mt-4 px-4 py-2 rounded hover:bg-gray-200"
          >
            Urlaub Planen
          </a>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-green-500 mt-8 pt-4 text-center">
        <img src="" alt="Zur Erleninsel" className="mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
