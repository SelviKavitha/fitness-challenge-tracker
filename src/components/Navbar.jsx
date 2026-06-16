import { Link } from "react-router-dom";
import { LuDumbbell } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-around items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-lg text-white">
            <LuDumbbell size={20} />
          </div>

          <h1 className="font-bold text-xl">
            FitChallenge
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex  gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#features" className="hover:text-orange-500">
              Features
            </a>
          </li>

          <li>
            <a href="#how-it-works" className="hover:text-orange-500">
              How It Works
            </a>
          </li>

          <li>
            <Link to="/login" className="hover:text-orange-500">
              Sign In
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/signup"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;