function LeaderboardTab({ leaderboard }) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h3 className="font-bold text-2xl mb-6">
        Top Performers
      </h3>

      <div className="space-y-4">
        {leaderboard.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between border rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                ${
                  index === 0
                    ? "bg-yellow-500"
                    : index === 1
                    ? "bg-gray-400"
                    : index === 2
                    ? "bg-orange-500"
                    : "bg-gray-200 text-black"
                }`}
              >
                {index + 1}
              </div>

              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h4 className="font-semibold">
                  {user.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {user.completed} challenges completed
                </p>
              </div>
            </div>

            <div className="text-right">
              <h4 className="font-bold text-orange-500 text-2xl">
                {user.points}
              </h4>
              <p className="text-gray-500 text-sm">
                points
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardTab;