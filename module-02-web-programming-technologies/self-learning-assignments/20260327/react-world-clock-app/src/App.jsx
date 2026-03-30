import Clock from "./components/Clock";

const App = () => {
  return (
    <div className="app-container">
      <h1>World Clock</h1>

      <div className="clock-container">
        <Clock country="India" timezone="Asia/Kolkata" />
        <Clock country="USA (New York)" timezone="America/New_York" />
        <Clock country="Japan" timezone="Asia/Tokyo" />
        <Clock country="Dubai" timezone="Asia/Dubai" />
      </div>
    </div>
  );
};

export default App;