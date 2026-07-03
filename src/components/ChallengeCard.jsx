import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

function ChallengeCard({
  challenge,
  showButton = true,
  buttonText = "View Challenge",
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300">

      <img
        src={challenge.avatar}
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
                challenge.level === "Beginner"
                  ? "bg-green-500"
                  : challenge.level === "Intermediate"
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
          >
            {challenge.level}
          </span>

        </div>

        <h2 className="text-2xl font-bold">
          {challenge.title}
        </h2>

        <p className="text-gray-500 mt-3 line-clamp-2">
          {challenge.description}
        </p>

        <div className="mt-4 space-y-2">

          <p className="flex items-center gap-2 text-gray-500">
            <FaUsers />
            {challenge.participants} Participants
          </p>

          <p className="flex items-center gap-2 text-gray-500">
            <FaCalendarAlt />
            {challenge.duration_days} Days
          </p>

        </div>

        {showButton && (
          <button
            onClick={() =>
              navigate(`/challenge/${challenge.challenge_id}`)
            }
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            {buttonText}
          </button>
        )}

      </div>
    </div>
  );
}

export default ChallengeCard;