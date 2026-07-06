import { FiCheckCircle } from "react-icons/fi";

function ActivityLog({ activities = [] }) {
 

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
      <h2 className="text-md font-semibold mb-5">
        Activity Log
      </h2>

      <div className="space-y-4">
        {activities?.map((activity) => (
          <div
            key={activity.day}
            className="border border-gray-200 rounded-xl p-3 flex justify-between items-center hover:shadow-sm transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <FiCheckCircle className="text-emerald-500 text-xl" />
              </div>

              <div>
                <h3 className="font-semibold text-md">
                  Day {activity.day}
                </h3>

                <p className="text-gray-500 text-sm">
                  {activity. description}
                </p>
              </div>
            </div>

            {/* Right */}
            <span className="text-gray-400 text-sm">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLog;