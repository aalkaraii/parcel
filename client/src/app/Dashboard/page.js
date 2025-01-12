"use client";
import { useState } from "react";
import { Calendar } from "@/component/Calender/page";
import CustomNavbar from "@/component/NavBar/page";
import { Navigation } from "@/component/Navigation/page";
import { ParcelCard } from "@/component/ParcelCard/page";
import { StatusTabs } from "@/component/StatusTabs/page";
import { color } from "framer-motion";

// Sample data with new statuses
const parcels = [
  {
    id: 1,
    trackingNumber: "DX123456789",
    description: "Electronics Package",
    status: "order-placed",
    destination: "New York, NY",
    estimatedDelivery: "2024-02-05",
    progress: 10,
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    trackingNumber: "DX987654321",
    description: "Fashion Items",
    status: "processing",
    destination: "Los Angeles, CA",
    estimatedDelivery: "2024-02-03",
    progress: 30,
    paymentMethod: "PayPal",
  },
  {
    id: 3,
    trackingNumber: "DX456789123",
    description: "Books Package",
    status: "in-transit",
    destination: "Chicago, IL",
    estimatedDelivery: "2024-02-01",
    progress: 60,
    paymentMethod: "Debit Card",
  },
  {
    id: 4,
    trackingNumber: "DX789123456",
    description: "Furniture",
    status: "out-for-delivery",
    destination: "Houston, TX",
    estimatedDelivery: "2024-01-30",
    progress: 90,
    paymentMethod: "Bank Transfer",
  },
  {
    id: 5,
    trackingNumber: "DX234567890",
    description: "Kitchenware Set",
    status: "delivered",
    destination: "Miami, FL",
    estimatedDelivery: "2024-01-28",
    progress: 100,
    paymentMethod: "Credit Card",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [activePage, setActivePage] = useState("home");
  const [selectedDate, setSelectedDate] = useState(null);
  const [chatParcel, setChatParcel] = useState(null);

  const filteredParcels = parcels.filter((parcel) => {
    if (activeTab === "all") return true;
    if (activeTab === "incoming")
      return [
        "order-placed",
        "processing",
        "in-transit",
        "out-for-delivery",
      ].includes(parcel.status);
    if (activeTab === "received") return parcel.status === "delivered";
    if (activeTab === "canceled") return parcel.status === "canceled";
    return true;
  });

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setActivePage("home");
  };

  const handleMessageClick = (parcel) => {
    setChatParcel(parcel);
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Parcel Status
              </h2>
              <p className="text-default-500">
                Track and manage your deliveries
              </p>
            </div>
            <StatusTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
              {filteredParcels
                .filter(
                  (parcel) =>
                    !selectedDate ||
                    new Date(parcel.estimatedDelivery).toDateString() ===
                      selectedDate.toDateString()
                )
                .map((parcel) => (
                  <ParcelCard
                    key={parcel.id}
                    parcel={parcel}
                    onMessageClick={handleMessageClick}
                  />
                ))}
            </div>
          </>
        );
      case "calendar":
        return (
          <div className=" mt-6 ">
            <Calendar parcels={parcels} onDateClick={handleDateClick} />
          </div>
        );
      case "payments":
        return (
          <div className="mt-6 ">
            <h2 className="text-2xl font-bold mb-4">Payments</h2>
            <div className="space-y-4 flex gap-8 ">
              {parcels.map((parcel) => (
                <div
                  key={parcel.id}
                  className="bg-transparent p-4 rounded-lg shadow-md w-40 "
                >
                  <h3 className="font-semibold">{parcel.trackingNumber}</h3>
                  <p>Payment Method: {parcel.paymentMethod}</p>
                  <p>Amount: ${Math.floor(Math.random() * 100) + 20}.00</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "messages":
        return <h2 className="text-2xl font-bold">Messages</h2>;
      case "support":
        return <h2 className="text-2xl font-bold">Support</h2>;
      default:
        return <h2 className="text-2xl font-bold">Page Not Found</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-300 to-white">
      <div className="flex-1 flex flex-col">
        <CustomNavbar />
        <div className=" flex">
          <Navigation onNavigate={setActivePage} activePage={activePage} />

          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-6xl mx-auto">{renderContent()}</div>
          </main>
        </div>
      </div>

      {/* <Chat
        parcel={chatParcel}
        isOpen={!!chatParcel}
        onClose={() => setChatParcel(null)}
      /> */}
    </div>
  );
}
