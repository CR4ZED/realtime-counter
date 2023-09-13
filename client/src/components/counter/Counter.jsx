import PropTypes from "prop-types";
import { socket } from "../../utils/socket";
import { SOCKET_EVENTS } from "../../utils/constants";

function Counter({ count, setCount }) {
  const updateCount = async (type) => {
    const newCount = type === "INCREMENT" ? count + 1 : count - 1;
    setCount(newCount);
    localStorage.setItem("count", newCount);
    socket.emit(SOCKET_EVENTS.UPDATE_COUNT, { count: newCount });
  };

  const resetCount = () => {
    setCount(0);
    localStorage.setItem("count", 0);
    socket.emit(SOCKET_EVENTS.UPDATE_COUNT, { count: 0 });
  };

  return (
      <div className="count">
        <button onClick={updateCount.bind(null, "DECREMENT")}>-</button>
        <p>count is {count}</p>
        <button onClick={updateCount.bind(null, "INCREMENT")}>+</button>
        <button onClick={resetCount}>Reset Count</button>
      </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
export default Counter;
