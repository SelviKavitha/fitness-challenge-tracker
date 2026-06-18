import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-indigo-50 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm px-4 py-2 rounded-full mb-6">
              ✨ Join 10,000+ Active Members
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Transform Your
              <br />
              Fitness Journey
              <br />
              <span className="text-orange-500">
                Together
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              Join community challenges, track your progress,
              and achieve your fitness goals with the support
              of thousands of motivated individuals.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get Started Free →
              </Link>

              <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white">
                Browse Challenges
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop"
              alt="Fitness"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;