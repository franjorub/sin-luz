import openSocket from "socket.io-client";
const socket = openSocket("http://192.168.1.102:8000");

function subscribeToTimer(cb) {
  socket.on("timer", tweets => cb(null, tweets));
  socket.emit("subscribeToTimer", 1000);
}

export { subscribeToTimer };
