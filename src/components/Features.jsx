import { FaBullseye, FaUsers, FaTrophy } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBullseye />,
      title: "Goal-Driven Challenges",
      description:
        "Join structured challenges designed to help you build lasting habits and reach your fitness milestones.",
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      description:
        "Connect with like-minded individuals, share your progress, and stay motivated through community engagement.",
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
    {
      icon: <FaTrophy />,
      title: "Track Your Progress",
      description:
        "Monitor your achievements, build streaks, and climb the leaderboard as you complete challenges.",
      bg: "bg-emerald-100",
      color: "text-emerald-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-6xl font-bold text-slate-900">
            Everything You Need to Succeed
          </h2>

          <p className="text-lg text-gray-500">
            Powerful features to keep you motivated and on track
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 rounded-2xl p-8 border-gray-200 hover:shadow-xl transition duration-300"
            >
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg} ${feature.color}`}
              >
                <span className="text-xl">
                  {feature.icon}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;