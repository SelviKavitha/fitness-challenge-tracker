function MilestoneCard() {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="font-bold text-xl mb-5">
        Milestones
      </h2>

      <div className="space-y-4">
        <p>✅ 7-Day Streak</p>
        <p>✅ 14-Day Streak</p>
        <p>⏳ 21-Day Streak</p>
        <p>⏳ Complete Challenge</p>
      </div>
    </div>
  );
}

export default MilestoneCard;