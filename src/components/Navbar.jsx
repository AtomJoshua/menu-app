import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">🍽️ FoodOrder</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/menu" className="hover:text-yellow-500">Menu</Link>
            <Link to="/cart" className="hover:text-yellow-500">Cart</Link>
            <Link to="/order" className="hover:text-yellow-500">Order</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/menu" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link to="/cart" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Cart</Link>
            <Link to="/order" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Order</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
