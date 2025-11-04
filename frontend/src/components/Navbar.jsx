import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const categories = ["tümü", "sağlık", "teknoloji", "spor", "bilim"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-14">
        <Link to="/" className="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          My Blog
        </Link>
        <div className="flex items-center space-x-8">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={cat === "tümü" ? "/" : `/category/${cat}`}
              className="capitalize text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;