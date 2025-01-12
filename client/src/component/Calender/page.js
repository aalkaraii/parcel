import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Calendar({ parcels, onDateClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isDeliveryDate = parcels.some(
        (parcel) =>
          new Date(parcel.estimatedDelivery).toDateString() ===
          date.toDateString()
      );

      days.push(
        <button
          key={day}
          onClick={() => onDateClick(date)}
          className={`p-2 text-center hover:bg-gray-100 ${
            isDeliveryDate ? "bg-green-100 hover:bg-green-200" : ""
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className=" bg-transparent rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className="p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "0.25rem",
        }}
      >
        {DAYS.map((day) => (
          <div
            key={day}
            style={{ textAlign: "center", fontWeight: "500", color: "gray" }}
          >
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}
