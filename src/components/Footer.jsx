// import { Link } from "react-router-dom";
import { Link } from "react-router";
import { LuDumbbell } from "react-icons/lu";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-16 md:px-20">

        <div className="grid gap-8 md:grid-cols-4">

          {/* Logo Section */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <LuDumbbell className="h-6 w-6 text-white" />
              </div>

              <span className="text-xl font-bold text-white">
                FitChallenge
              </span>
            </Link>

            <p className="mt-4 text-sm text-neutral-400">
              Join a community of fitness enthusiasts and
              achieve your goals together.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Product
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/browse"
                  className="transition-colors hover:text-white"
                >
                  Browse Challenges
                </Link>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors hover:text-white"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
          <p>
            © 2026 FitChallenge. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;