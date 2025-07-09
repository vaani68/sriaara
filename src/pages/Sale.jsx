import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';

function Sale() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const imports = import.meta.glob('/content/sale/*.md', { as: 'raw' });

    const loadItems = async () => {
      const entries = await Promise.all(
        Object.entries(imports).map(async ([path, load]) => {
          const raw = await load();
          const { data } = matter(raw);
          return data;
        })
      );

      setItems(entries);
    };

    loadItems();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen text-center">
      <img src="/logo.png" alt="Sriaara Logo" className="w-32 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-6">Sale Sarees</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-pink-50 rounded-xl shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 mb-2">₹{item.price}</p>

            {item.isAvailable ? (
              <a
                href={`https://wa.me/917013931155?text=I'm%20interested%20in%20${encodeURIComponent(
                  item.title
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block"
              >
                WhatsApp to Order
              </a>
            ) : (
              <span className="text-red-500 font-semibold">Sold Out</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;
