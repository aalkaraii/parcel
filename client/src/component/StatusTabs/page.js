export function StatusTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "all", label: "All" },
    { id: "incoming", label: "Incoming" },
    { id: "received", label: "Received" },
    { id: "canceled", label: "Canceled" },
  ];

  return (
    <div className="flex space-x-4 border-b border-gray-200 overflow-x-auto">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`px-4 py-2 -mb-px text-sm font-medium whitespace-nowrap ${
            activeTab === id
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
