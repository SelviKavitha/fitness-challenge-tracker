import { FaRegCalendarAlt, FaFire } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

function YourStats() {
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const joinedChallenges = currentUser.joinedChallenges || [];

  // Joined Challenges Count
  const joinedCount = joinedChallenges.length;

  let completedCount = 0;
  let currentStreak = 0;

  joinedChallenges.forEach((id) => {
    const challenge = JSON.parse(
      localStorage.getItem(`challenge_${id}`)
    );

    if (!challenge) return;

    if (Number(challenge.completed) >= 100) {
      completedCount++;
    }

    currentStreak = Math.max(
      currentStreak,
      Number(challenge.streak || 0)
    );
  });

  const statsData = [
    {
      id: 1,
      title: "Challenges Joined",
      value: joinedCount,
      icon: <FaRegCalendarAlt />,
      color: "text-orange-500",
    },
    {
      id: 2,
      title: "Completed",
      value: completedCount,
      icon: <GiTrophyCup />,
      color: "text-emerald-500",
    },
    {
      id: 3,
      title: "Current Streak",
      value: currentStreak,
      icon: <FaFire />,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-md font-semibold mb-6">
        Your Stats
      </h2>

      <div className="space-y-5">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className={`text-lg ${item.color}`}>
                {item.icon}
              </span>

              <span className="text-sm text-gray-700">
                {item.title}
              </span>
            </div>

            <span className="text-2xl font-bold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourStats;