import { useState } from "react";
import Clock from "./components/Clock";
import AddClock from "./components/AddClock";

const App = () => {
  const [clocks, setClocks] = useState([
    { id: 1, country: "India", timezone: "Asia/Kolkata" },
    { id: 2, country: "USA (New York)", timezone: "America/New_York" },
    { id: 3, country: "Japan", timezone: "Asia/Tokyo" },
    { id: 4, country: "Dubai", timezone: "Asia/Dubai" },
  ]);
  
  // Remove clock
  const handleRemove = (id) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id));
  };

  // Add new clock
  const handleAdd = ({ country, timezone }) => {
    setClocks((prev) => {
      // Prevent duplicate timezone
      const exists = prev.some(
        (clock) => clock.timezone === timezone
      );
      if (exists) {
        alert("Clock already exists!");
        return prev;
      }

      return [
        ...prev,
        {
          id: Date.now(), // unique ID
          country,
          timezone,
        },
      ];
    });
  };

  return (
    <div className="app-container">
      <h1>World Clock</h1>

      {/* Add Clock Feature */}
      <AddClock onAdd={handleAdd} />

      <div className="clock-container">
        {clocks.map((clock) => (
          <Clock
            key={clock.id}
            id={clock.id}
            country={clock.country}
            timezone={clock.timezone}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default App;