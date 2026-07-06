import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch, FaUsers, FaCalendarAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import axios from 'axios';
import { updateFavorites } from "../services/favoritesApi";
import { FaMicrophone, FaMicrophoneSlash, } from "react-icons/fa";

function BrowseChallenges() {
  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    const loadChallenges = async () => {
      try {
        const response = await axios.get('https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges');
        setChallenges(response.data);
      } catch (error) {
        console.error("Error loading challenge details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadChallenges();
  }, []);

  // Filter Logic execution
  const filteredChallenges = challenges.filter((challenge) => {
    const matchSearch = challenge.title
      ? challenge.title.toLowerCase().includes(search.toLowerCase())
      : false;

    const matchCategory = category === "All" || challenge.category === category;
    const matchLevel = level === "All" || challenge.level === level;

    return matchSearch && matchCategory && matchLevel;
  });
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const isFavorite = (challengeId) => {

    return currentUser?.favorites?.includes(challengeId);
  };



  async function addFavorite(id) {
    let favorites = currentUser.favorites || [];

    let message = "";

    if (favorites.includes(id)) {
      favorites = favorites.filter((item) => item !== id);
      message = "Challenge removed from favorites ❤️";
    } else {
      favorites.push(id);
      message = "Challenge added to favorites ❤️";
    }

    await updateFavorites(currentUser.id, favorites);

    const updatedUser = {
      ...currentUser,
      favorites,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    setCurrentUser(updatedUser);

    alert(message);
  }
  const recognitionRef = useRef(null);
  const startVoiceSearch = () => {
    setVoiceMessage("");

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceMessage("❌ Speech Recognition is not supported.");
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("🎤 Listening...");
      setIsListening(true);
      setVoiceMessage("🎤 Listening...");
    };

    recognition.onaudiostart = () => {
      console.log("🎧 Audio started");
    };

    recognition.onsoundstart = () => {
      console.log("🔊 Sound detected");
    };

    recognition.onspeechstart = () => {
      console.log("🗣️ Speech detected");
      setVoiceMessage("🗣️ Listening...");
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      console.log("Transcript:", transcript);

      // Show live text
      setSearch(transcript);

      if (event.results[event.results.length - 1].isFinal) {
        setVoiceMessage("✅ Voice recognized successfully.");
      }
    };

    recognition.onerror = (event) => {
      console.log("Speech Error:", event.error);

      let message = "";

      switch (event.error) {
        case "no-speech":
          message = "❌ No speech detected. Please speak louder and closer to the microphone.";
          break;

        case "audio-capture":
          message = "❌ No microphone found.";
          break;

        case "not-allowed":
          message = "❌ Microphone permission denied.";
          break;

        case "network":
          message = "❌ Network error.";
          break;

        default:
          message = `❌ ${event.error}`;
      }

      setVoiceMessage(message);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("🛑 Recognition ended");
      setIsListening(false);
    };

    recognition.start();
  };

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(() => console.log("Mic OK"))
    .catch(console.error);


  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">
        <div className="container mx-auto px-4 py-8 md:px-20">

          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              Browse Challenges
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Discover fitness challenges that match your goals and fitness level
            </p>
          </div>


          <div className="mt-10 grid md:grid-cols-4 gap-4">

            <div className="relative md:col-span-2">

              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  isListening
                    ? "🎤 Listening..."
                    : "Search challenges..."
                }
                className="w-full bg-white rounded-md pl-12 pr-14 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
              />

              <button
                type="button"
                onClick={startVoiceSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {isListening ? (
                  <FaMicrophone
                    className="text-red-500 text-2xl animate-pulse"
                  />
                ) : (
                  <FaMicrophoneSlash
                    className="text-orange-500 text-2xl hover:text-orange-600"
                  />
                )}
              </button>

            </div>


            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
            >
              <option value="All">All Categories</option>
              <option value="Yoga">Yoga</option>
              <option value="Cardio">Cardio</option>
              <option value="Strength">Strength</option>
              <option value="General Fitness">General Fitness</option>
            </select>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>


          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl text-gray-500 animate-pulse">Loading active community challenges...</p>
            </div>
          ) : (
            <>
              <p className="mt-8 text-gray-500">
                Showing {filteredChallenges.length} challenges
              </p>

              {/* Grid Layout Cards */}
              {filteredChallenges.length === 0 ? (
                <div className="text-center bg-white p-10 rounded-2xl mt-6 shadow-sm">
                  <p className="text-xl text-gray-500">No challenges found matching your filters.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                  {filteredChallenges.map((challenge) => (
                    <Link
                      key={challenge.challenge_id}
                      to={`/challenge/${challenge.challenge_id}`}
                      className="block"
                    >
                      <div
                        key={challenge.challenge_id}
                        className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
                      >
                        <div>
                          <img
                            src={challenge.avatar}
                            alt={challenge.title}
                            className="w-full h-56 object-cover"
                          />


                          <div className="p-5">
                            {/* <div className="flex gap-2 mb-4">
                              <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-md">
                                {challenge.category}
                              </span>
                              <span
                                className={`text-xs px-3 py-1 rounded-md text-white
                                ${challenge.level === "Beginner"
                                    ? "bg-orange-500"
                                    : challenge.level === "Intermediate"
                                      ? "bg-blue-500"
                                      : "bg-red-500"
                                  }`}
                              >
                                {challenge.level}
                              </span>
                              <button
                                onClick={() => addFavorite(challenge.challenge_id)}
                                className="shadow-md flex items-center justify-end hover:scale-110 transition"
                              >
                                {isFavorite(challenge.challenge_id) ? (
                                  <FaHeart className="text-red-500 text-xl hover:scale-110 transition" />
                                ) : (
                                  <FaRegHeart className="text-xl text-red-500 hover:scale-110 transition" />
                                )}
                              </button>
                            </div> */}
                            <div className="flex items-center justify-between mb-4">

                              <div className="flex gap-2">
                                <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-md">
                                  {challenge.category}
                                </span>

                                <span
                                  className={`text-xs px-3 py-1 rounded-md text-white ${challenge.level === "Beginner"
                                    ? "bg-orange-500"
                                    : challenge.level === "Intermediate"
                                      ? "bg-blue-500"
                                      : "bg-red-500"
                                    }`}
                                >
                                  {challenge.level}
                                </span>
                              </div>


                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addFavorite(challenge.challenge_id);
                                }}
                                className="flex items-center justify-center cursor-pointer"
                              >
                                {isFavorite(challenge.challenge_id) ? (
                                  <FaHeart className="text-red-500 text-xl hover:scale-110 transition" />
                                ) : (
                                  <FaRegHeart className="text-red-500 text-xl hover:scale-110 transition" />
                                )}
                              </button>
                            </div>

                            <h3 className="text-2xl font-bold">{challenge.title}</h3>
                            <p className="text-gray-500 mt-3 line-clamp-2">
                              {challenge.description}
                            </p>


                            <div className="mt-4 space-y-2">
                              <p className="flex items-center gap-2 text-gray-500">
                                <FaUsers />
                                {(challenge.participants || 0).toLocaleString()} participants
                              </p>
                              <p className="flex items-center gap-2 text-gray-500">
                                <FaCalendarAlt />
                                {challenge.duration_days} Days
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 pb-5">
                          <button
                            onClick={() => navigate(`/challenge/${challenge.challenge_id}`)}
                            className="w-full cursor-pointer bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                          >
                            View Challenge
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BrowseChallenges;