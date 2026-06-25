import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  FaFire,
  FaTrophy,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

function Dashboard() {
  const savedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const username = savedUser?.name || "Sarah";

  const [challenges] = useState([
    {
      id: 1,
      title: "30-Day Morning Yoga",
      category: "Yoga",
      level: "Beginner",
      progress: 50,
      participants: 1247,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
    },
    {
      id: 2,
      title: "Run 100 Miles",
      category: "Running",
      level: "Intermediate",
      progress: 45,
      participants: 892,
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500",
    },
  ]);

  const leaderboard = [
    {
      id: 1,
      name: "Rahul",
      score: 8450,
    },
    {
      id: 2,
      name: "Priya",
      score: 7890,
    },
    {
      id: 3,
      name: "Arun",
      score: 7234,
    },
    {
      id: 4,
      name: "Divya",
      score: 6890,
    },
    {
      id: 5,
      name: "Karthik",
      score: 6543,
    },
  ];

  const activities = [
    "Rahul completed the Yoga Challenge 🎉",
    "Priya reached 50 miles in Running Challenge ✨",
    "Arun joined Strength Training Bootcamp 💪",
    "Divya earned Early Bird Badge 🏆",
    "Karthik completed today's workout 🔥",
  ];

  const addFavorite = (challenge) => {
    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    const exists = favorites.find(
      (item) => item.id === challenge.id
    );

    if (!exists) {
      favorites.push(challenge);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      alert("Added to Favorites");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        <div className="container mx-auto px-4 py-8 md:px-20">

          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 border border-orange-200 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6">

            <div>
              <h1 className="text-4xl font-bold">
                Welcome Back, {username} 👋
              </h1>

              <p className="text-gray-600 mt-2">
                Keep pushing your limits and stay
                consistent with your fitness journey.
              </p>
            </div>

            <div className="flex gap-4">

              <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-center gap-2">
                  <FaFire className="text-orange-500 text-2xl" />
                  <span className="text-3xl font-bold">
                    14
                  </span>
                </div>

                <p className="text-gray-500">
                  Day Streak
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow">
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-green-500 text-2xl" />
                  <span className="text-3xl font-bold">
                    #47
                  </span>
                </div>

                <p className="text-gray-500">
                  Global Rank
                </p>
              </div>

            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">

            {/* Left Section */}
            <div className="lg:col-span-2">

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
                  Active Challenges
                </h2>

                <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                  Browse More
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="bg-white rounded-2xl shadow overflow-hidden"
                  >
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-5">

                      <div className="flex gap-2 mb-3">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded text-xs">
                          {challenge.category}
                        </span>

                        <span className="border px-3 py-1 rounded text-xs">
                          {challenge.level}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold">
                        {challenge.title}
                      </h3>

                      <div className="flex justify-between mt-4 text-sm">
                        <span>Progress</span>
                        <span>
                          {challenge.progress}%
                        </span>
                      </div>

                      <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
                        <div
                          className="h-3 bg-orange-500 rounded-full"
                          style={{
                            width: `${challenge.progress}%`,
                          }}
                        ></div>
                      </div>

                      <p className="mt-4 flex items-center gap-2 text-gray-500">
                        <FaUsers />
                        {challenge.participants}
                        Participants
                      </p>

                      <button
                        onClick={() =>
                          addFavorite(challenge)
                        }
                        className="mt-4 w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50"
                      >
                        Save Challenge
                      </button>

                    </div>
                  </div>
                ))}

              </div>

              {/* Community Activity */}
              <div className="mt-10">

                <h2 className="text-3xl font-bold mb-6">
                  Community Activity
                </h2>

                <div className="bg-white rounded-2xl shadow">

                  {activities.map(
                    (activity, index) => (
                      <div
                        key={index}
                        className="p-5 border-b last:border-0"
                      >
                        {activity}
                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">

              {/* Stats */}
              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-2xl font-bold mb-5">
                  Your Stats
                </h3>

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <span className="flex gap-2 items-center">
                      <FaCalendarAlt />
                      Challenges Joined
                    </span>

                    <strong>12</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex gap-2 items-center">
                      <FaTrophy />
                      Completed
                    </span>

                    <strong>8</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex gap-2 items-center">
                      <FaFire />
                      Current Streak
                    </span>

                    <strong>14</strong>
                  </div>

                </div>

              </div>

              {/* Today's Activity */}
              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-2xl font-bold mb-5">
                  Today's Activity
                </h3>

                <div className="space-y-3">
                  <p>🚶 Steps : 8,432</p>
                  <p>🔥 Calories : 560</p>
                  <p>⏱ Workout : 45 mins</p>
                  <p>🏃 Distance : 5.8 km</p>
                </div>

              </div>

              {/* Leaderboard */}
              <div className="bg-white rounded-2xl shadow p-6">

                <h3 className="text-2xl font-bold mb-5">
                  Leaderboard
                </h3>

                {leaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex justify-between py-3 border-b last:border-0"
                  >
                    <span>
                      {index + 1}. {user.name}
                    </span>

                    <span className="font-bold text-orange-500">
                      {user.score}
                    </span>
                  </div>
                ))}

              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
              >
                Logout
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;