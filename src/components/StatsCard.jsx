function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white border rounded-xl p-4 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span className="text-orange-500">
          {icon}
        </span>

        <p>{title}</p>
      </div>

      <h3 className="font-bold text-xl">
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;