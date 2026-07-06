import { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      const response = await axios.get(
        "https://6a3e9fa70443193a1a0c25c2.mockapi.io/users"
      );

      const sortedUsers = response.data
        .sort((a, b) => Number(b.points || 0) - Number(a.points || 0))
        .slice(0, 5);

      setUsers(sortedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
      <h2 className="text-md font-semibold">
        Top Performers
      </h2>

      <p className="text-gray-500 mt-1 mb-6">
        This month's leaderboard
      </p>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              {/* Rank */}
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Avatar */}
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />

              {/* Name */}
              <div>
                <p className="font-medium text-sm">
                  {user.name}
                </p>

                {/* <p className="text-xs text-gray-500">
                  🔥 {user.streak || 0} Day Streak
                </p> */}
              </div>
            </div>



            <span className="font-bold text-orange-500">
              {user.points || 0}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 border border-gray-300 rounded-lg py-2 font-medium text-sm hover:bg-emerald-400 hover:text-white transition">
        View Full Leaderboard
      </button>
    </div>
  );
}

export default Leaderboard;