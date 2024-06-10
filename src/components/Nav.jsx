import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">02 - ANON - REACT</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to='/' className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to='/Owner' className="text-white hover:text-gray-400">Owner</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
