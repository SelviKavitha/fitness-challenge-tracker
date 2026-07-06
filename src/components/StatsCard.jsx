// import { FaRegCalendarAlt, FaFire } from "react-icons/fa";
// import { GiTrophyCup } from "react-icons/gi";

// function StatsCard({ challenge }) {
//   if (!challenge) return null;

//   const statsData = [
//     {
//       id: 1,
//       title: "Challenge Duration",
//       value: `${challenge.duration_days} Days`,
//       icon: <FaRegCalendarAlt />,
//       color: "text-orange-500",
//     },
//     {
//       id: 2,
//       title: "Completed",
//       value: `${challenge.completed}%`,
//       icon: <GiTrophyCup />,
//       color: "text-emerald-500",
//     },
//     {
//       id: 3,
//       title: "Current Streak",
//       value: `${challenge.streak} Days`,
//       icon: <FaFire />,
//       color: "text-orange-500",
//     },
//   ];

//   return (
//     <div className="bg-white border border-gray-300 rounded-2xl p-6">
//       <h2 className="text-md font-medium mb-4">
//         Your Stats
//       </h2>

//       <div className="space-y-4">
//         {statsData.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between"
//           >
//             <div className="flex items-center gap-3">
//               <span
//                 className={`text-lg ${item.color}`}
//               >
//                 {item.icon}
//               </span>

//               <span className="text-gray-700">
//                 {item.title}
//               </span>
//             </div>

//             <span className="text-md font-bold text-slate-900">
//               {item.value}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StatsCard;

import {
  FaRegCalendarAlt,
  FaFire,
  FaChartLine,
} from "react-icons/fa";

function StatsCard({ challenge }) {
  if (!challenge) return null;

  const statsData = [
    {
      id: 1,
      title: "Days Completed",
      value: challenge.currentDay,
      icon: <FaRegCalendarAlt />,
      color: "text-orange-500",
    },
    {
      id: 2,
      title: "Current Streak",
      value: challenge.streak,
      icon: <FaFire />,
      color: "text-orange-500",
    },
    {
      id: 3,
      title: "Completion",
      value: `${challenge.completed}%`,
      icon: <FaChartLine />,
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-md font-semibold">
          Your Stats
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-4"
          >
            <div className="flex items-center gap-3">
              <span className={`text-lg ${item.color}`}>
                {item.icon}
              </span>

              <span className="text-sm text-gray-700">
                {item.title}
              </span>
            </div>

            <span className="text-xl font-bold text-slate-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCard;