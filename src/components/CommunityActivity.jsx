import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrophy, FaHeart } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

const iconMap = {
  trophy: <FaTrophy className="text-emerald-500 text-xl" />,
  trending: <HiTrendingUp className="text-orange-500 text-xl" />,
  heart: <FaHeart className="text-red-500 text-xl" />,
};

function CommunityActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivities();
  }, []);

const loadActivities = async () => {
  try {
    const response = await axios.get(
      "https://6a3e9fa70443193a1a0c25c2.mockapi.io/users"
    );

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const activityData = response.data.map((user) => {
      let message = "started their fitness journey";
      let icon = "heart";

      // Current logged-in user
      if (user.id === currentUser?.id) {
        let highestProgress = 0;
        let highestStreak = 0;
        let challengeTitle = "";

        (currentUser.joinedChallenges || []).forEach((challengeId) => {
          const saved = JSON.parse(
            localStorage.getItem(`challenge_${challengeId}`)
          );

          if (saved) {
            if (Number(saved.completed) > highestProgress) {
              highestProgress = Number(saved.completed || 0);
              highestStreak = Number(saved.streak || 0);
              challengeTitle = saved.title;
            }
          }
        });

        if (highestProgress >= 100) {
          message = `completed ${challengeTitle} challenge! 🎉`;
          icon = "trophy";
        } else if (highestStreak > 0) {
          message = `completed ${challengeTitle} workout! Day ${highestStreak} 🔥`;
          icon = "trending";
        } else if ((currentUser.joinedChallenges || []).length > 0) {
          message = `joined ${challengeTitle} challenge 💪`;
          icon = "heart";
        }
      } else {
        // Other users
        if ((user.joinedChallenges || []).length > 0) {
          message = "joined a new fitness challenge 💪";
          icon = "heart";
        } else {
          message = "started their fitness journey";
          icon = "heart";
        }
      }

      return {
        id: user.id,
        username: user.name,
        avatar: user.avatar,
        message,
        time: "Today",
        icon,
      };
    });

    setActivities(activityData);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <div className="py-3">
        <h2 className="text-2xl font-bold">
          Community Activity
        </h2>
      </div>

      <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex items-center justify-between px-4 py-4 ${index !== activities.length - 1
              ? "border-b border-gray-200"
              : ""
              }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={activity.avatar}
                alt={activity.username}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-sm">
                  <span className="font-semibold">
                    {activity.username}
                  </span>{" "}
                  {activity.message}
                </p>

                <p className="text-xs text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>

            <div>{iconMap[activity.icon]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommunityActivity;