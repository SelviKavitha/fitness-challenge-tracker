function TabSection({
  tabs,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="bg-gray-100 p-1 rounded-xl flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() =>
            setActiveTab(tab.id)
          }
          className={`flex-1 py-3 rounded-lg font-medium transition
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