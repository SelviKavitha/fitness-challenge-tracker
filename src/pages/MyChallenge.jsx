import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaUsers } from "react-icons/fa";

function MyChallenge() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMyChallenges();
  }, []);

  const loadMyChallenges = async () => {
    setLoading(true);

    const currentUser = JSON.parse(localStorage.getItem("currentUser") );

    if (!currentUser) {
      setLoading(false);
      return;
    }

    const joined = currentUser.joinedChallenges || [];

    try {
      const response = await axios.get(
        "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges"
      );

      const activeChallenges = response.data.filter((challenge) =>
        joined.includes(challenge.challenge_id)
      );

      // Create localStorage for each joined challenge if it doesn't exist
      activeChallenges.forEach((challenge) => {
        const key = `challenge_${challenge.challenge_id}`;

        if (!localStorage.getItem(key)) {
          const savedChallenge = {
            ...challenge,
            currentDay: challenge.currentDay ?? 14,
            streak: challenge.streak ?? 14,
            completed:
              challenge.completed ??
              Math.round((14 / challenge.duration_days) * 100),
            activities: challenge.activities || [],
          };

          localStorage.setItem(
            key,
            JSON.stringify(savedChallenge)
          );
        }
      });

      setChallenges(activeChallenges);


    } catch (error) {
      console.error("Error fetching challenges:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get latest progress from localStorage
  const getChallengeProgress = (challenge) => {
    const savedChallenge = JSON.parse(
      localStorage.getItem(
        `challenge_${challenge.challenge_id}`
      )
    );

    return (
      savedChallenge?.completed ??
      challenge.completed ??
      0
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-gray-500 text-lg">
            Loading challenges...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {challenges.length > 0 ? (
        challenges.slice(0, 2).map((challenge) => (
          <Link
            key={challenge.challenge_id}
            to={`/progress/${challenge.challenge_id}`}
          >
            <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={challenge.avatar}
                alt={challenge.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-xs">
                    {challenge.category}
                  </span>

                  <span className="border border-gray-300 px-3 py-1 rounded text-xs">
                    {challenge.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {challenge.title}
                </h3>

                {/* Progress */}
                <div className="flex justify-between mt-4 text-sm">
                  <span>Progress</span>

                  <span>
                    {getChallengeProgress(challenge)}%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-3 bg-orange-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${getChallengeProgress(
                        challenge
                      )}%`,
                    }}
                  />
                </div>

                {/* Participants */}
                <p className="mt-4 flex items-center gap-2 text-gray-500">
                  <FaUsers />
                  {challenge.participants} Participants
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-2 bg-white rounded-2xl shadow p-10 text-center">
          <h2 className="text-2xl font-bold">
            No Active Challenges
          </h2>

          <p className="text-gray-500 mt-2">
            Join a challenge to get started.
          </p>

          <Link to="/browse"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition">
            Browse Challenges
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyChallenge;