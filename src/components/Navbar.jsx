// import { Link ,useNavigate} from "react-router-dom";
import { useNavigate,Link } from "react-router";
import { LuDumbbell } from "react-icons/lu";

function Navbar() {
  const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    navigate("/");
  };
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-18 md:px-20">
<div className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-lg text-white">
            <LuDumbbell size={20} />
          </div>

          <h1 className="font-bold text-xl">
            FitChallenge
          </h1>
        </div>
        <div className="flex items-center gap-4">
                 {!isLoggedIn ? (
              <>
          <ul className="hidden md:flex gap-4 text-sm items-center">
            <li className="hover:text-orange-500"><a href="#features">Features</a></li>
            <li className="hover:text-orange-500"><a href="#how">How It Works</a></li>
            <li><Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-white hover:bg-emerald-500  h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5" to="/login">Sign In</Link></li>
          </ul>

          <Link
            to="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-medium inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
          >
            Get Started
          </Link>
          </>):<>
           {/* After Login Menu */}

                <Link
                  to="/dashboard"
                  className="font-medium hover:text-orange-500 transition"
                >
                  Feed
                </Link>

                <Link
                  to="/browse"
                  className="font-medium hover:text-orange-500 transition"
                >
                  Browse
                </Link>

                {/* Profile Dropdown */}
                <div className="relative group">

                  <div className="flex items-center gap-3 cursor-pointer">
                    <img
                      src="https://i.pravatar.cc/150?img=32"
                      alt="profile"
                      className="w-12 h-12 rounded-full border-2 border-orange-500"
                    />
                  </div>

                  {/* Dropdown */}
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                    <div className="p-4 border-b">
                      <h4 className="font-semibold text-gray-800">
                        {username}
                      </h4>

                      <p className="text-xs text-gray-500">
                        Fitness Member
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 hover:bg-gray-50"
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/favorites"
                      className="block px-4 py-3 hover:bg-gray-50"
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
            
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;