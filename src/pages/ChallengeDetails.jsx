import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import TabSection from "../components/TabSection";
import { getChallengeById } from "../services/api";
import JoinChallengeCard from "../components/JoinChallengeCard";
import { FaUsers, FaRegCalendar, } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

function ChallengeDetail() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    getChallengeById(id).then((data) => {
      setChallenge(data);
    });
  }, [id]);

  const leaderboard = [
    {
      name: "fitness_king",
      completed: 24,
      points: 8450,
      avatar:
        "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "marathon_queen",
      completed: 21,
      points: 7890,
      avatar:
        "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "workout_warrior",
      completed: 19,
      points: 7234,
      avatar:
        "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "yoga_master",
      completed: 18,
      points: 6890,
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "healthy_habits",
      completed: 17,
      points: 6543,
      avatar:
        "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const activities = [
    {
       avatar:
        "https://randomuser.me/api/portraits/men/55.jpg",
      user: "runner_mike",
      text: "completed today's challenge 🔥",
      time: "2 hours ago",
    },
    {
       avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
      user: "yoga_emma",
      text: "reached a 15-day streak 🎉",
      time: "4 hours ago",
    },
    {
      user: "strong_alex",
      text: "joined this challenge",
      time: "6 hours ago",
    },
  ];

  if (!challenge) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }


  const handleJoin = (challengeId) => {
    if (!currentUser) {
      alert("Please login first.");
      return;
    }

    let joined = currentUser.joinedChallenges || [];

    if (joined.includes(challengeId)) {
      alert("You have already joined this challenge.");
      return;
    }

    joined.push(challengeId);

    const updatedUser = {
      ...currentUser,
      joinedChallenges: joined,
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser)
    );
    setCurrentUser(updatedUser);
    alert("Challenge Joined Successfully!");
  };
  const isJoined = (challengeId) => {
    return currentUser?.joinedChallenges?.includes(challengeId);
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen">
        <div className="h-[420px] bg-cover bg-center relative" style={{ backgroundImage: `url(${challenge.avatar})`, }}>
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 py-8 md:px-20 h-full flex flex-col justify-end pb-10 text-white">
              <div className="flex gap-3 mb-4">
                <span className="bg-purple-500 px-4 py-1 rounded-lg text-sm">
                  {challenge.category}
                </span>

                <span className="border px-4 py-1 rounded-lg text-sm">
                  {challenge.level}
                </span>
              </div>

              <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
                {challenge.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-3 text-base">
                  <FaUsers className="w-6 h-6" />
                  {challenge.participants} participants
                </span>

                <span className="flex items-center gap-3 text-base">
                  <FaRegCalendar className="w-6 h-6" />
                  {challenge.duration_days} Days
                </span>

                <span className="flex items-center gap-3 text-base">
                  <FiTarget className="w-6 h-6" />
                  {challenge.goal}
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:px-20">

          <div className="grid lg:grid-cols-3 gap-8">


            <div className="lg:col-span-2">

              <TabSection
                tabs={[
                  {
                    id: "overview",
                    label: "Overview",
                  },
                  {
                    id: "leaderboard",
                    label: "Leaderboard",
                  },
                  {
                    id: "activity",
                    label: "Activity Feed",
                  },
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />


              {activeTab === "overview" && (
                <div className="space-y-6">

                  <div className="bg-white border-gray-300 border-1 rounded-xl p-4">

                    <h2 className="text-xl font-medium mb-5">
                      About This Challenge
                    </h2>

                    <p className="text-gray-600">
                      {challenge.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-100 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FiTarget className="w-5 h-5 text-orange-500" />
                          <h3 className="font-semibold">Challenge Goal</h3>
                        </div>

                        <p className="text-gray-500">
                          {challenge.goal}
                        </p>
                      </div>

                      <div className="bg-gray-100 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <FaRegCalendar className="w-5 h-5 text-orange-500" />
                          <h3 className="font-semibold">Duration</h3>
                        </div>

                        <p className="text-gray-500">
                          {challenge.duration_days} {"Days"}
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="bg-white border rounded-2xl p-6">

                    <h2 className="text-2xl font-bold mb-6">
                      How It Works
                    </h2>

                    <div className="space-y-5">

                      <div>
                        <h3 className="font-semibold">
                          1. Join the Challenge
                        </h3>
                        <p className="text-gray-500">
                          Click Join Challenge to start.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          2. Track Your Progress
                        </h3>
                        <p className="text-gray-500">
                          Log activities every day.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          3. Complete and Celebrate
                        </h3>
                        <p className="text-gray-500">
                          Earn badges and rewards.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}


              {activeTab === "leaderboard" && (
                <div className="bg-white border-gray-300 border-1 rounded-2xl p-6">

                  <h2 className="text-xl font-medium mb-6">
                    Top Performers
                  </h2>

                  <div className="space-y-4">

                    {leaderboard.map(
                      (user, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-gray-300 border-1 rounded-xl p-4"
                        >
                          <div className="flex items-center gap-4">

                            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                              {index + 1}
                            </div>

                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="relative flex size-10 shrink-0 overflow-hidden rounded-full"
                            />

                            <div>
                              <h3 className="font-semibold">
                                {user.name}
                              </h3>

                              <p className="text-gray-500 text-sm">
                                {user.completed}
                                {" "}
                                challenges completed
                              </p>
                            </div>

                          </div>

                          <div className="text-right">
                            <h3 className="text-xl font-bold text-orange-500">
                              {user.points}
                            </h3>

                            <p className="text-gray-500 text-sm">
                              points
                            </p>
                          </div>

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* ACTIVITY */}
              {activeTab === "activity" && (
                <div className="bg-white border-gray-300 border-1 rounded-2xl p-6">

                  <h2 className="text-2xl font-bold mb-6">
                    Recent Activity
                  </h2>

                  <div className="space-y-4">

                    {activities.map(
                      (activity, index) => (
                        <div
                          key={index}
                          className="border rounded-xl p-4"
                        >
                           <img
                              src={activity.avatar}
                              alt={activity.name}
                              className="relative flex size-10 shrink-0 overflow-hidden rounded-full"
                            />
                          <h3 className="font-medium text-gray-600">
                            {activity.user}   {activity.text}
                          </h3>

                        

                          <span className="text-sm text-gray-400">
                            {activity.time}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                </div>
              )}
            </div>

            <div className="space-y-6">
              <JoinChallengeCard challenge={challenge}
                onJoin={handleJoin} isJoined={isJoined(challenge.challenge_id)} />

              <div className="bg-white border rounded-2xl p-6">

                <h3 className="font-bold text-xl mb-5">
                  Challenge Stats
                </h3>

                <div className="space-y-5">

                  <div>
                    <h3 className="text-3xl font-bold">
                      {challenge.participants}
                    </h3>
                    <p className="text-gray-500">
                      Active Participants
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">
                      {challenge.completionRate}
                    </h3>
                    <p className="text-gray-500">
                      Completion Rate
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">
                      {challenge.rating}
                    </h3>
                    <p className="text-gray-500">
                      Average Rating
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white border rounded-2xl p-6">

                <h3 className="font-bold text-xl mb-4">
                  Top Participants
                </h3>

                <div className="flex -space-x-3">
                  {leaderboard
                    .slice(0, 5)
                    .map((user, index) => (
                      <img
                        key={index}
                        src={user.avatar}
                        alt=""
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                    ))}
                </div>

                <p className="text-gray-500 mt-4">
                  Join {challenge.participants}
                  {" "}
                  others in this challenge
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeDetail;