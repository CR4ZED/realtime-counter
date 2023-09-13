const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const { SOCKET_EVENTS } = require("./constants");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  },
});

io.on("connection", (socket) => {
  socket.on(SOCKET_EVENTS.UPDATE_COUNT, (data) => {
    socket.broadcast.emit(SOCKET_EVENTS.UPDATE_COUNT, data);
  });
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
