import { useSelector, useDispatch } from "react-redux";

import Clock from "./components/Clock";
import AddClock from "./components/AddClock";

import { addClock, removeClock } from "./redux/reducers/clockReducer";

const App = () => {
  const dispatch = useDispatch();
  const clocks = useSelector((state) => state.clock.clocks);

  const handleAdd = (clockData) => {
    dispatch(addClock(clockData));
  };

  const handleRemove = (id) => {
    dispatch(removeClock(id));
  };

  return (
    <div className="app-container">
      <h1>World Clock</h1>

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