import React from 'react';

const Menu = () => {
  const dishes = [
    { id: 1, name: 'Lemon juice', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'เนื้อแท้', price: 12 },
  ];

  const imageUrls = [
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0yY3N1anBraDZxaDFzJnM9anA3JnQ9ZCZ1PTFlZW9hdDcyMDNoMDAmaT0w/w750?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0tMWlldWhmM2o1MDI3NSZzPWpwNyZ0PWQmdT0xZWNyazc1YnMzaGcwJmk9MA/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0tYnBodmZlbTQ0b2NmJnM9anA3JnQ9ZCZ1PTFkZXZibHJqczNpZzAmaT0w/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0tMmNnN3ZkYWhsMmtxdSZzPWpwNyZ0PWQmdT0xZGVocWdxdTgzamcwJmk9MA/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0xa3JoaXE4ZG85NXE1JnM9anA3JnQ9ZCZ1PTFjbXBxNGhlczNqMDAmaT0w/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj05NWduYm5jbWI2ZTcmcz1qcDcmdD1kJnU9MWNtcHEwcHJjM2lnMCZpPTA/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0yc2NjdnNwY2E0a2J1JnM9anA3JnQ9ZCZ1PTFjbXBwdHM3YzNoZzAmaT0w/w480?0",
    "https://voom-obs.line-scdn.net/r/myhome/hex/cj0tNjF1cnI0NjY1aGpmdCZzPWpwNyZ0PWQmdT0xY21wcGlhaWczamcwJmk9MA/w480?0",
  ];

  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Menu</h2>
      <img
        className="mb-6 w-full h-auto object-cover rounded-lg shadow-md"
        alt="Delicious food"
        src="https://voom-obs.line-scdn.net/r/myhome/hex/cj0tMjR2ZHN1MTM4cDdvaCZzPWpwNyZ0PWQmdT0xYmQ3bGNzOHMzajAwJmk9MA/w750?0"
      />
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Dishes</h3>
      <ul className="space-y-4">
        {dishes.map(dish => (
          <li key={dish.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow">
            <span className="text-lg font-medium text-gray-900">{dish.name}</span>
            <span className="text-lg font-semibold text-gray-600">${dish.price}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-700">Gallery</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div className="photo_item" key={index}>
            <a href={`/493rgatt/media/324338818599035/item/${index}`}>
              <img
                className="w-full h-auto rounded-lg shadow-sm transition-transform transform hover:scale-105"
                alt=""
                src={url}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
