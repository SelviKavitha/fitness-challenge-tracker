function GoalCard({ challenge }) {
  // Calculate end date from createdAt + duration_days
  const endDate = new Date(challenge.createdAt);

  endDate.setDate(
    endDate.getDate() + Number(challenge.duration_days || 0)
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-md font-semibold text-slate-900">
          Challenge Goal
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">

        {/* Target */}
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">
            Target
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {challenge.goal}
          </p>
        </div>

        {/* Duration */}
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">
            Duration
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {challenge.duration_days} Days
          </p>
        </div>

        {/* End Date */}
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">
            End Date
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {endDate.toLocaleDateString()}
          </p>
        </div>

      </div>
    </div>
  );
}

export default GoalCard;