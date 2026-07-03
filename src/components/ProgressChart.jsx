import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
 Tooltip,
} from "recharts";

function ProgressChart({ data }) {
  return (
    <div className="bg-white rounded-2xl border p-6">

      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Your Progress
        </h2>

        <span className="font-semibold">
          14 / 30 days
        </span>
      </div>

      {/* Progress Bar */}

      <div className="w-full h-3 rounded-full bg-orange-100 mb-8">
        <div className="w-[47%] h-3 bg-orange-500 rounded-full"></div>
      </div>

      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>

            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="completed"
              stroke="#f97316"
              fill="#fdba74"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ProgressChart;