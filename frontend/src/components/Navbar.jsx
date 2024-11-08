import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-end">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400">Accueil</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-400">Inscription</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">Connexion</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
