import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { getChallenges } from "../services/api";
import { useNavigate } from "react-router";

function BrowseChallenges() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
 const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();


  const loadChallenges = async () => {
    const data = await getChallenges();
    setChallenges(data);
  };

  
useEffect(() => {
    loadChallenges();
  }, []);
  const filteredChallenges = challenges.filter((challenge) => {
    const matchSearch = challenge.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      challenge.category === category;

    const matchLevel =
      level === "All" ||
      challenge.level === level;

    return (
      matchSearch &&
      matchCategory &&
      matchLevel
    );
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="container mx-auto px-4 py-8 md:px-20">

          {/* Heading */}
          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              Browse Challenges
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Discover fitness challenges that
              match your goals and fitness level
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 grid md:grid-cols-4 gap-4">

            <div className="relative md:col-span-2">
              <FaSearch className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search challenges..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full bg-white rounded-xl pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="bg-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>All</option>
              <option>Yoga</option>
              <option>Running</option>
              <option>Strength</option>
              <option>Walking</option>
              <option>Mindfulness</option>
              <option>Cycling</option>
            </select>

            <select
              value={level}
              onChange={(e) =>
                setLevel(e.target.value)
              }
              className="bg-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

          </div>

          {/* Count */}
          <p className="mt-8 text-gray-500">
            Showing {filteredChallenges.length}
            {" "}challenges
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

            {filteredChallenges.map(
              (challenge) => (
                <div
                  key={challenge.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <div className="flex gap-2 mb-4">

                      <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-md">
                        {challenge.category}
                      </span>

                      <span
                        className={`text-xs px-3 py-1 rounded-md text-white
                        ${
                          challenge.level ===
                          "Beginner"
                            ? "bg-orange-500"
                            : challenge.level ===
                              "Intermediate"
                            ? "bg-blue-500"
                            : "bg-red-500"
                        }`}
                      >
                        {challenge.level}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold">
                      {challenge.title}
                    </h3>

                    <p className="text-gray-500 mt-3 line-clamp-2">
                      {challenge.description}
                    </p>

                    <div className="mt-4 space-y-2">

                      <p className="flex items-center gap-2 text-gray-500">
                        <FaUsers />
                        {challenge.participants.toLocaleString()}
                        participants
                      </p>

                      <p className="flex items-center gap-2 text-gray-500">
                        <FaCalendarAlt />
                        {challenge.duration}
                      </p>

                    </div>

                  <button
  onClick={() =>
    navigate(`/challenge/${challenge.id}`)
  }
  className="w-full bg-orange-500 text-white py-3 rounded-lg"
>
  View Challenge
</button>

                  </div>
                </div>
              )
            )}

          </div>

        </div>
      </div>
    </>
  );
}

export default BrowseChallenges;