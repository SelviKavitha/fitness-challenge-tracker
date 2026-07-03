function ActivityLog({ logs }) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="font-bold text-2xl mb-6">
        Activity Log
      </h2>

      <div className="space-y-4">
        {logs.map((item) => (
          <div
            key={item.day}
            className="border rounded-xl p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">
                Day {item.day}
              </h3>

              <p className="text-gray-500">
                Completed morning yoga session
              </p>
            </div>

            <span className="text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLog;