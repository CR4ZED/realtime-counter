import PropTypes from 'prop-types';
import { socket } from "../../utils/socket";
import { SOCKET_EVENTS } from "../../utils/constants";

function Counter({ count, setCount }) {
  const updateCount = async ( type ) => {
    const newCount = type === 'INCREMENT'? count + 1: count - 1
    setCount(newCount);
    localStorage.setItem("count", newCount);
    socket.emit(SOCKET_EVENTS.UPDATE_COUNT, { count: newCount });
  };

  return (
    <>
      <button onClick={updateCount.bind(null, 'DECREMENT')}>-</button>
      <p>count is {count}</p>
      <button onClick={updateCount.bind(null, 'INCREMENT')}>+</button>
    </>
  );
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}
export default Counter;
