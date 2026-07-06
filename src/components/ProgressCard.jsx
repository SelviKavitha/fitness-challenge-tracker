// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// function ProgressCard({ challenge }) {
//   const TOTAL_DAYS = 30;

//   const data = Array.from(
//     { length: challenge.currentDay },
//     (_, index) => ({
//       day: `Day ${index + 1}`,
//       value: index + 1,
//     })
//   );

//   return (
//     <div className="bg-white border-1 border-gray-300 rounded-xl p-3">

//       <div className="flex justify-between mb-4">
//         <h2 className="text-md font-semibold">
//           Your Progress
//         </h2>

//         <h2 className="text-md font-semibold">
//           {challenge.currentDay} / {TOTAL_DAYS} days
//         </h2>
//       </div>

//       {/* Progress Bar */}
//       <h2 className="text-sm font-base text-gray-500 mb-2">
//         Overall Progress
//       </h2>
//       <div className="w-full h-4 bg-orange-100 rounded-full mb-8">

//         <div
//           className="bg-orange-500 h-4 rounded-full"
//           style={{
//             width: `${challenge.completed}%`,
//           }}
//         ></div>
//       </div>

//       <div className="h-[350px]">

//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={data}
//             margin={{
//               top: 10,
//               right: 20,
//               left: 10,
//               bottom: 10,
//             }}
//           >
//             <CartesianGrid
//               strokeDasharray="4 4"
//               stroke="#e5e7eb"
//             />

//             <XAxis
//               dataKey="day"
//               tick={{ fontSize: 14 }}
//             />

//             {/* <YAxis
//               domain={[0, 16]}
//               ticks={[0, 4, 8, 12, 16]}
//               tick={{ fontSize: 14 }}
//             /> */}
//             <YAxis
//               domain={[0, TOTAL_DAYS]}
//               ticks={[0, 10, 20, 30]}
//               tick={{ fontSize: 14 }}
//             />

//             <Tooltip />

//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="#f97316"
//               strokeWidth={4}
//               dot={{
//                 fill: "#f97316",
//                 r: 6,
//               }}
//               activeDot={{
//                 r: 8,
//               }}
//             />
//           </LineChart>
//         </ResponsiveContainer>

//       </div>

//     </div>
//   );
// }

// export default ProgressCard;


import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ProgressCard({ challenge }) {
  const TOTAL_DAYS = 30;

  const data = Array.from(
    { length: challenge.currentDay },
    (_, index) => ({
      day: `Day ${index + 1}`,
      value: index + 1,
    })
  );

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-3">

      <div className="flex justify-between mb-4">
        <h2 className="text-md font-semibold">
          Your Progress
        </h2>

        <h2 className="text-md font-semibold">
          {challenge.currentDay} / {TOTAL_DAYS} days
        </h2>
      </div>

      <h2 className="text-sm text-gray-500 mb-2">
        Overall Progress
      </h2>

      <div className="w-full h-4 bg-orange-100 rounded-full mb-8">
        <div
          className="bg-orange-500 h-4 rounded-full"
          style={{
            width: `${challenge.completed}%`,
          }}
        />
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e5e7eb"
            />

            <XAxis dataKey="day" />

            <YAxis
              domain={[0, TOTAL_DAYS]}
              ticks={[0, 10, 20, 30]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={4}
              dot={{ fill: "#f97316", r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProgressCard;