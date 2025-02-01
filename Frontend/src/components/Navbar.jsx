import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "/assets/hamburger.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      {/* Top Navbar Row */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Safaii Sathi</Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/report-status" className="hover:underline">
            Report Status
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Right Side Register/Login */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 text-sm"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 text-sm"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu (for Mobile) */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={hamburgerIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-blue-700 p-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="inline-block hover:underline px-2 py-1">
              Home
            </Link>
            <Link
              to="/report-status"
              className="inline-block hover:underline px-2 py-1"
            >
              Report Status
            </Link>
            <Link
              to="/contact"
              className="inline-block hover:underline px-2 py-1"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-4 flex items-center justify-start space-x-2">
            <Link
              to="/register"
              className="inline-block bg-white text-blue-600 px-3 py-1.5 rounded hover:bg-gray-200 text-sm"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-600 px-3 py-1.5 rounded hover:bg-gray-200 text-sm"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
