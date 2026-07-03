import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaUsers } from "react-icons/fa";

function MyChallenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    loadMyChallenges();
  }, []);

  const loadMyChallenges = async () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) return;

    const joined =
      currentUser.joinedChallenges || [];

    try {
      const response = await axios.get(
        "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges"
      );

      const activeChallenges =
        response.data.filter((challenge) =>
          joined.includes(challenge.challenge_id)
        );

      setChallenges(activeChallenges);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
    <div className="grid md:grid-cols-2 gap-6">

  {challenges?.length > 0 ? (

    challenges
      .slice(0, 2)
      .map((challenge) => (

        <Link
          key={challenge.challenge_id}
          to={`/challenge/${challenge.challenge_id}`}
        >

          <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition">

            <img
              src={challenge.avatar}
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
                <span>{challenge.progress || 0}%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-3 bg-orange-500 rounded-full"
                  style={{
                    width: `${challenge.progress || 0}%`,
                  }}
                />

              </div>

              <p className="mt-4 flex items-center gap-2 text-gray-500">
                <FaUsers />
                {challenge.participants} Participants
              </p>

            </div>

          </div>

        </Link>

      ))

  ) : (

    <div className="col-span-2 bg-white rounded-2xl p-10 text-center">

      <h2 className="text-2xl font-bold">
        No Active Challenges
      </h2>

      <p className="text-gray-500 mt-2">
        Join a challenge to get started.
      </p>

      <Link
        to="/browse-challenges"
        className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
      >
        Browse Challenges
      </Link>

    </div>

  )}

</div>
  );
}

export default MyChallenges;