import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

function Favorites() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) return;

    const response = await axios.get(
      "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges"
    );

    const favoriteChallenges =
      response.data.filter((challenge) =>
        currentUser.favorites.includes(
          challenge.challenge_id
        )
      );

    setFavorites(favoriteChallenges);
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="container mx-auto px-4 py-8 md:px-20">

          <h1 className="text-5xl font-bold">
            My Favorites
          </h1>

          <p className="text-gray-500 mt-2">
            Your saved fitness challenges
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {favorites.map((challenge) => (

              <div
                key={challenge.challenge_id}
                className="bg-white rounded-2xl overflow-hidden shadow"
              >

                <img
                  src={challenge.avatar}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <span className="bg-purple-500 text-white px-3 py-1 rounded text-xs">
                    {challenge.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-3">
                    {challenge.title}
                  </h2>

                  <p className="text-gray-500 mt-3">
                    {challenge.description}
                  </p>

                  <p className="flex gap-2 mt-4">
                    <FaUsers />
                    {challenge.participants}
                  </p>

                  <p className="flex gap-2 mt-2">
                    <FaCalendarAlt />
                    {challenge.duration_days} Days
                  </p>

                  <button
                    onClick={() =>
                      navigate(
                        `/challenge/${challenge.challenge_id}`
                      )
                    }
                    className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg"
                  >
                    View Challenge
                  </button>

                </div>

              </div>

            ))}

          </div>

          {favorites.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold">
                No Favorites Yet ❤️
              </h2>

              <p className="text-gray-500 mt-3">
                Browse challenges and add your favorites.
              </p>
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Favorites;