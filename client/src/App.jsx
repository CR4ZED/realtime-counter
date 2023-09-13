import { useEffect, useState } from "react";
import "./App.css";
import { socket } from "./utils/socket";
import Counter from "./components/counter/Counter";
import { SOCKET_EVENTS } from "./utils/constants";

function App() {
  const [count, setCount] = useState(+localStorage.getItem("count") || 0);

  useEffect(() => {
    // initiate connection to websocket
    socket.connect();

    function onConnect() {
      console.log(`Connected to websocket server`);
    }

    function onDisconnect() {
      console.log(`Disconnected from websocket server`);
    }

    function onUpdateCount({ count }) {
      setCount(count);
    }

    // attach event listeners for websocket
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on(SOCKET_EVENTS.UPDATE_COUNT, onUpdateCount);

    // remove event listeners on socket
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off(SOCKET_EVENTS.UPDATE_COUNT, onUpdateCount);
    };
  }, []);

  return <Counter count={count} setCount={setCount} />;
}

export default App;
