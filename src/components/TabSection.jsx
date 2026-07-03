function TabSection({
  tabs,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="bg-gray-100 p-1 rounded-xl flex mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() =>
            setActiveTab(tab.id)
          }
          className={`flex-1 py-2 rounded-lg font-medium transition
            ${
              activeTab === tab.id
                ? "bg-white shadow text-orange-500"
                : "text-gray-500"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabSection;