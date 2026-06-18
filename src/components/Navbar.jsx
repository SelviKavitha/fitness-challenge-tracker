import { Link } from "react-router-dom";
import { LuDumbbell } from "react-icons/lu";

function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;