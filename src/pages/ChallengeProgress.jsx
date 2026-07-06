import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";
import MilstoneCard from "../components/MilstoneCard";
import ActivityLog from "../components/ActivityLog";
import ProgressCard from "../components/ProgressCard";
import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import CheckInCard from "../components/CheckInCard";
import { FaArrowLeft, FaFire, FaBullseye } from "react-icons/fa";


function ChallengeProgress() {
    const { id } = useParams();

    const [challenge, setChallenge] = useState(null);

    const TOTAL_DAYS = 30;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChallenge = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges"
                );

                const selectedChallenge = response.data.find(
                    (item) => item.challenge_id === id
                );

                // setChallenge(selectedChallenge);
                // const savedChallenge = localStorage.getItem(`challenge_${id}`);

                // if (savedChallenge) {
                //     setChallenge(JSON.parse(savedChallenge));
                // } else {
                //     setChallenge({
                //         ...selectedChallenge,
                //         currentDay: selectedChallenge.currentDay ?? 14,
                //         streak: selectedChallenge.streak ?? 14,
                //         completed:
                //             selectedChallenge.completed ??
                //             Math.round((14 / TOTAL_DAYS) * 100),
                //         activities: selectedChallenge.activities || [],
                //     });
                // }
                const savedChallenge = localStorage.getItem(`challenge_${id}`);

                if (savedChallenge) {
                    setChallenge(JSON.parse(savedChallenge));
                } else {
                    const initialChallenge = {
                        ...selectedChallenge,
                        currentDay: 14,
                        streak: 14,
                        completed: Math.round((14 / TOTAL_DAYS) * 100),
                        activities: selectedChallenge.activities || [],
                    };

                    setChallenge(initialChallenge);

                    // Save the initial state so it exists after refresh
                    localStorage.setItem(
                        `challenge_${id}`,
                        JSON.stringify(initialChallenge)
                    );
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchChallenge();
    }, [id]);
    if (loading) return <div>Loading...</div>;



    const handleCheckIn = () => {
        setChallenge((prev) => {
            if (!prev) return prev;

            if (prev.currentDay >= TOTAL_DAYS) {
                alert("Challenge Completed!");
                return prev;
            }
            const nextDay = Number(prev.currentDay || 0) + 1;
            const updatedChallenge = {
                ...prev,
                currentDay: nextDay,
                streak: Number(prev.streak || 0) + 1,
                completed: Math.round(
                    (nextDay / TOTAL_DAYS) * 100
                ),
                activities: [
                    {
                        day: nextDay,
                        description: "Completed today's activity",
                        time: "Today",
                    },

                    ...(prev.activities || []).map((item, index) => ({
                        ...item,
                        time:
                            index === 0
                                ? "Yesterday"
                                : `${index + 1} days ago`,
                    })),
                ],
            };

            localStorage.setItem(`challenge_${id}`, JSON.stringify(updatedChallenge)
            );

            return updatedChallenge;
        });
    };


   // console.log(challenge?.currentDay, 'challenge')
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 md:px-20 py-8">

                <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-8"
                >
                    <FaArrowLeft />
                    <span className="text-sm font-medium">Back to Dashboard</span>
                </Link>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Left Side */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <span className="bg-purple-600 text-white px-2 py-1 rounded font-semibold text-xs">
                                {challenge.category}
                            </span>

                            <span className="border border-gray-300 px-2 py-1 rounded text-xs font-semibold">
                                {challenge.remainingDays} days remaining
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold md:text-4xl">
                            {challenge.title}
                        </h1>
                    </div>

                    {/* Right Side */}

                    <div className="flex items-center gap-8">
                        {/* Day Streak */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <FaFire className="text-orange-500 text-2xl" />

                                <p className="text-3xl font-bold text-slate-900">
                                    {challenge.streak}
                                </p>
                            </div>

                            <p className="text-sm text-gray-500">
                                Day Streak
                            </p>
                        </div>

                        {/* Complete */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <FaBullseye className="text-green-500 text-2xl" />

                                <p className="text-3xl font-bold text-slate-900">
                                    {challenge.completed}
                                </p>
                            </div>

                            <p className="text-sm text-gray-500">
                                Complete
                            </p>
                        </div>
                    </div>


                </div>

                <div className="grid lg:grid-cols-3 gap-6 mt-8">

                    {/* Left */}
                    <div className="lg:col-span-2 space-y-6">
                        <CheckInCard
                            title="Daily Check-In"
                            description="Have you completed today's activity? Log your progress to keep your streak alive!"
                            buttonText="Log Today's Activity"
                            onCheckIn={handleCheckIn}
                        />

                        <ProgressCard challenge={challenge} />
                        <ActivityLog activities={challenge?.activities} />

                    </div>

                    {/* Right */}
                    <div className="space-y-6">

                        <StatsCard challenge={challenge} />
                        <GoalCard challenge={challenge} />
                        <MilstoneCard challenge={challenge} />

                    </div>

                </div>
            </div>

        </>
    );
}

export default ChallengeProgress;