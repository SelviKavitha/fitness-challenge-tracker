function JoinChallengeCard({ challenge, onJoin, isJoined, }) {
  // console.log(onJoin, "Onjoin")
  //   console.log(isJoined, "isJoined")
  return (
    <div className="bg-white border-2 border-orange-500 rounded-2xl p-6">

      <button
        onClick={() => onJoin(challenge.challenge_id)}
        className={`w-full py-3 rounded-lg text-sm font-semibold transition cursor-pointer  ${isJoined
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
      >
        {isJoined ? "Remove Challenge" : "Join Challenge"}
      </button>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">
            Start Date
          </span>

          <span className="font-medium text-sm">
            {challenge.startDate}{"03/13/2026"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">
            End Date
          </span>

          <span className="font-medium text-sm">
            {challenge.endDate} {"05/13/2026"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">
            Difficulty
          </span>

          <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
            {challenge.level}
          </span>
        </div>

      </div>
    </div>
  );
}

export default JoinChallengeCard;