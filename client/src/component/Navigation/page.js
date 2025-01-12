import {
  Home,
  Package,
  Calendar,
  CreditCard,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

export function Navigation({ onNavigate }) {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "parcels", label: "My Parcels", icon: Package },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  const handleNavigation = (id) => {
    setActiveItem(id);
    onNavigate(id);
  };

  return (
    <nav className="w-64 bg-transparent border-r border-gray-200 h-screen p-4">
      <div className="space-y-6">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleNavigation(id)}
            className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors ${
              activeItem === id
                ? "bg-purple-100 text-purple-600"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
