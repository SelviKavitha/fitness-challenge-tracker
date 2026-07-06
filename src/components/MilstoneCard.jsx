// import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

// function MilestoneCard({ challenge }) {
//   const milestones = [
//     { id: 1, title: "7-Day Streak", target: 7 },
//     { id: 2, title: "14-Day Streak", target: 14 },
//     { id: 3, title: "21-Day Streak", target: 21 },
//     { id: 4, title: "Complete Challenge", target: 30 },
//   ];

//   const completedActivities = challenge?.activities?.length || 0;

//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-6">
//       <h2 className="font-semibold text-md mb-5">
//         Milestones
//       </h2>

//       <div className="space-y-4">
//         {milestones.map((item) => {
//           const completed = completedActivities >= item.target;

//           return (
//             <div
//               key={item.id}
//               className="flex items-center gap-3"
//             >
//               {completed ? (
//                 <FaCheckCircle className="text-green-500 text-lg" />
//               ) : (
//                 <FaRegCircle className="text-gray-400 text-lg" />
//               )}

//               <div>
//                 <p
//                   className={
//                     completed
//                       ? "text-green-600 font-medium"
//                       : "text-gray-600"
//                   }
//                 >
//                   {item.title}
//                 </p>

//                 <p className="text-xs text-gray-400">
//                   {completed
//                     ? "Completed"
//                     : `${completedActivities}/${item.target} days`}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default MilestoneCard;
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function MilestoneCard({ challenge }) {
  const milestones = [
    { id: 1, title: "7-Day Streak", target: 7 },
    { id: 2, title: "14-Day Streak", target: 14 },
    { id: 3, title: "21-Day Streak", target: 21 },
    { id: 4, title: "Complete Challenge", target: 30 },
  ];

  // Use currentDay instead of activities.length
  const completedDays = Number(challenge?.currentDay || 0);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="font-semibold text-md mb-5">
        Milestones
      </h2>

      <div className="space-y-4">
        {milestones.map((item) => {
          const completed = completedDays >= item.target;

          return (
            <div
              key={item.id}
              className="flex items-center gap-3"
            >
              {completed ? (
                <FaCheckCircle className="text-green-500 text-lg" />
              ) : (
                <FaRegCircle className="text-gray-400 text-lg" />
              )}

              <div>
                <p className={`font-medium text-md`}>
                  {item.title}
                </p>

                <p className="text-xs text-gray-400">
                  {completed
                    ? "Completed"
                    : `${completedDays}/${item.target} days`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MilestoneCard;