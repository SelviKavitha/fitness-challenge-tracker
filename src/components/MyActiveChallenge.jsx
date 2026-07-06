import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import ChallengeCard from "../components/ChallengeCard";
import Navbar from "./Navbar";

function MyActiveChallenge() {
  const [myChallenges, setMyChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChallenges();
  }, []);

  async function loadChallenges() {
    try {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      if (!currentUser) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges"
      );

      const joined =
        currentUser.joinedChallenges || [];

      const activeChallenges =
        response.data.filter((challenge) =>
          joined.includes(challenge.challenge_id)
        );

      setMyChallenges(activeChallenges);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
        <Navbar/>

      <div className="container mx-auto px-4 py-8 md:px-20">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-xl font-bold">
              My Active Challenges
            </h1>

            <p className="text-gray-500 mt-2">
              Continue your fitness journey and
              achieve your goals.
            </p>
          </div>

          <Link
            to="/browse"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-2 py-1 rounded transition"
          >
            Browse More
          </Link>

        </div>

        {/* Total */}

        {!loading && (
          <p className="text-gray-500 mb-6">
            Active Challenges :{" "}
            <span className="font-semibold text-black">
              {myChallenges.length}
            </span>
          </p>
        )}

        {/* Loading */}

        {loading ? (
          <div className="flex justify-center py-24">

            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

          </div>
        ) : myChallenges.length > 0 ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {myChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challenge_id}
                challenge={challenge}
                buttonText="Continue Challenge"
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl shadow p-12 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Challenges"
              className="w-36 mx-auto"
            />

            <h2 className="text-3xl font-bold mt-6">
              No Active Challenges
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't joined any challenges yet.
              Explore fitness challenges and start
              your journey today.
            </p>

            <Link
              to="/browse-challenges"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3 py-1 rounded transition"
            >
              Browse Challenges
            </Link>

          </div>

        )}

      </div>
    </div>
  );
}

export default MyActiveChallenge;