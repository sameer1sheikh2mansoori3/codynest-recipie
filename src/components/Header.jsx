import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white p-4 h-20">
      <nav className="flex justify-between items-center h-full">
        <div className="text-2xl font-bold">FoodieHub</div>
        <ul className="flex space-x-6">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-400 cursor-pointer">Order</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
