import { FaFire, FaTrophy } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

export const statsData = [
  {
    id: 1,
    title: "Challenges Joined",
    value: 12,
    icon: <FaFire />,
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "Completed",
    value: 8,
    icon: <FaTrophy />,
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Current Streak",
    value: 14,
    icon: <HiTrendingUp />,
    color: "text-orange-500",
  },
];

export const leaderboardData = [
  {
    id: 1,
    name: "fitness_king",
    avatar: "/images/avatar1.jpg",
    score: "8450",
  },
  {
    id: 2,
    name: "marathon_queen",
    avatar: "/images/avatar2.jpg",
    score: "7890",
  },
  {
    id: 3,
    name: "workout_warrior",
    avatar: "/images/avatar3.jpg",
    score: "7234",
  },
];

export const suggestionData = {
  image: "/images/meditation.jpg",
  category: "Mindfulness",
  title: "Mindful Meditation March",
  description:
    "Cultivate inner peace and reduce stress with daily meditation practice.",
};