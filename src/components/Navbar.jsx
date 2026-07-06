import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LuDumbbell } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const username =
    localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-20">


        <Link
          to={isLoggedIn ? "/dashboard" : "/"}
          className="flex items-center gap-2"
        >
          <div className="bg-orange-500 p-2 rounded-lg text-white">
            <LuDumbbell size={20} />
          </div>

          <h1 className="font-bold text-xl">
            FitChallenge
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">

          {!isLoggedIn ? (
            <>
              {location.pathname === "/" && (
                <a
                  href="#features"
                  className="hover:text-orange-500 text-sm transition"
                >
                  Features
                </a>
              )}
              <a
                href="#how"
                className="hover:text-orange-500 text-sm transition"
              >
                How It Works
              </a>

              <Link
                to="/login"
                className=" px-2 py-1 rounded hover:bg-emerald-500 hover:text-white text-sm font-medium inline-flex items-center justify-center"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="hover:text-orange-500"
              >
                Feed
              </Link>

              <Link
                to="/browse"
                className="hover:text-orange-500"
              >
                Browse
              </Link>

              <div className="relative group">

                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="profile"
                  className="w-11 h-11 rounded-full border-2 border-orange-500 cursor-pointer"
                />

                <div className="absolute right-0 mt-3 w-56 bg-white rounded-0 shadow-lg border-1 border-gray-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">

                  <div className="p-4 border-1 border-gray-300">
                    <h4 className="font-semibold">
                      {username}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Fitness Member
                    </p>
                  </div>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/browse"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Browse Challenges
                  </Link>

                  <Link
                    to="/favorites"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Favorites
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>

                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden"
        >
          {menuOpen ? (
            <HiX size={30} />
          ) : (
            <HiMenu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow">

          {!isLoggedIn ? (
            <>
              <a
                href="#features"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                Features
              </a>

              <a
                href="#how"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                How It Works
              </a>

              <Link
                to="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block m-4 bg-orange-500 text-center text-white py-3 rounded-lg"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 p-5 border-b">

                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-orange-500"
                />

                <div>
                  <h4 className="font-semibold">
                    {username}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Fitness Member
                  </p>
                </div>

              </div>

              <Link
                to="/dashboard"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                Dashboard
              </Link>

              <Link
                to="/browse"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                Browse Challenges
              </Link>

              <Link
                to="/favorites"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block px-5 py-4 hover:bg-gray-100"
              >
                Favorites
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-4 text-red-500 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;