function ChallengeHeader({ challenge }) {
  return (
    <div>
      <p className="text-gray-500 mb-3">
        ← Back to Dashboard
      </p>

      <div className="flex gap-2 mb-4">
        <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
          {challenge.category}
        </span>

        <span className="border px-3 py-1 rounded text-sm">
          {challenge.daysRemaining} days remaining
        </span>
      </div>

      <h1 className="text-5xl font-bold">
        {challenge.title}
      </h1>
    </div>
  );
}

export default ChallengeHeader;