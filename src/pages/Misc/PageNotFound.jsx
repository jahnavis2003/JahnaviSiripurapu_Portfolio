import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-white bg-black px-4">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link
      to="/home"
      className="px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded transition"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFound;
