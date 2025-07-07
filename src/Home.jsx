import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const menuItems = [
    { label: 'Sarees', link: '/sarees' },
    { label: 'Dress Material', link: '/dresses' },
    { label: 'Sale', link: '/sale' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sriaara Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link to={item.link} key={item.label}>
            <div className="bg-white shadow-xl rounded-2xl p-6 w-64 text-center hover:bg-pink-100 transition-all">
              <h2 className="text-xl font-semibold">{item.label}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
