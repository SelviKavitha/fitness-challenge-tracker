import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ProgressChart() {
  const data = [
    { day: "Day 1", value: 1 },
    { day: "Day 2", value: 2 },
    { day: "Day 3", value: 3 },
    { day: "Day 4", value: 4 },
    { day: "Day 5", value: 5 },
    { day: "Day 6", value: 6 },
    { day: "Day 7", value: 7 },
    { day: "Day 8", value: 8 },
    { day: "Day 9", value: 9 },
    { day: "Day 10", value: 10 },
    { day: "Day 11", value: 11 },
    { day: "Day 12", value: 12 },
    { day: "Day 13", value: 13 },
    { day: "Day 14", value: 14 },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Overall Progress
        </h2>

        <h2 className="text-lg font-bold">
          14 / 30 days
        </h2>
      </div>

      {/* Progress Bar */}

      <div className="w-full h-4 bg-orange-100 rounded-full mb-8">
        <div
          className="bg-orange-500 h-4 rounded-full"
          style={{ width: "47%" }}
        ></div>
      </div>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 14 }}
            />

            <YAxis
              domain={[0, 16]}
              ticks={[0, 4, 8, 12, 16]}
              tick={{ fontSize: 14 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={4}
              dot={{
                fill: "#f97316",
                r: 6,
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ProgressChart;