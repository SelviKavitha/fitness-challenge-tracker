import Navbar from "../components/Navbar";
import { FaFire, FaTrophy } from "react-icons/fa";
import { Link } from "react-router";
import MyChallenge from "./MyChallenge";
import CommunityActivity from "../components/CommunityActivity";
import { communityActivityData } from "../data/communityactivityData";
// import StatsCard from "../components/StatsCard";
import Leaderboard from "../components/Leaderboard";
import SuggestionCard from "../components/SuggestionCard";
import YourStats from "../components/YourStats";

function Dashboard() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const username =
    localStorage.getItem("username") ||
    savedUser?.name ||
    "Sarah";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 md:px-20 py-8">
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 border border-orange-200 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome Back, {username}! 👋
              </h1>
              <p className="text-gray-600 mt-2"> Keep pushing your limits and stay consistent with your fitness journey. </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-white rounded-xl shadow px-6 py-4">
                <div className="flex items-center gap-2">
                  <FaFire className="text-orange-500 text-2xl" />
                  <span className="text-2xl font-bold">
                    14
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  Day Streak
                </p>
              </div>


              <div className="bg-white rounded-xl shadow px-6 py-4">
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-green-500 text-2xl" />
                  <span className="text-2xl font-bold">
                    #47
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  Global Rank
                </p>
              </div>

            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
                  Active Challenges
                </h2>

                <Link
                  to="/active-challenges"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-orange-500 hover:text-white" >
                  Browse More
                </Link>
              </div>

              <MyChallenge />

              <div className="mt-8">
                <CommunityActivity />
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <YourStats />
              <Leaderboard />
              <SuggestionCard />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;