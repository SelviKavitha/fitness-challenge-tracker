function ActivityFeedTab({ activities }) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h3 className="font-bold text-2xl mb-6">
        Activity Feed
      </h3>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="border-b pb-4"
          >
            <h4 className="font-medium">
              {item.user}
            </h4>

            <p className="text-gray-600">
              {item.message}
            </p>

            <span className="text-sm text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeedTab;