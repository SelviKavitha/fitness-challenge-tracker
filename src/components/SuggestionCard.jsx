function SuggestionCard() {
  const suggestion = {
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    category: "Mindfulness",
    title: "Mindful Meditation March",
    description:
      "Cultivate inner peace and reduce stress with daily meditation practice. All levels are welcome.",
    buttonText: "Join Challenge",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
      {/* Heading */}
      <h2 className="text-md font-semibold mb-4">
        Suggested for You
      </h2>

      {/* Image */}
      <img
        src={suggestion.image}
        alt={suggestion.title}
        className="h-40 w-full object-cover transition-transform group-hover:scale-105"
      />

      {/* Category */}
      <span className="inline-block mt-5 bg-orange-500 text-white text-sm px-3 py-1 rounded-md font-medium">
        {suggestion.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold mt-2">
        {suggestion.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-3">
        {suggestion.description}
      </p>

      {/* Button */}
      <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-1 rounded-lg font-semibold transition">
        {suggestion.buttonText}
      </button>
    </div>
  );
}

export default SuggestionCard;