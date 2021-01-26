import io from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("https://colorpicker-chatapp.herokuapp.com/", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Connected"));
};

export const sendMessage = (message) => {
  socket && socket.emit("message", message);
};

export const sendName = (name) => {
  socket && socket.emit("user", name);
};

export const sendColor = (color) => {
  socket && socket.emit("color", color);
};

export const numberOfConnections = (cb) => {
  if (!socket) return true;

  socket.on("number-of-connections", (numberOfConnections) => {
    cb(numberOfConnections);
  });
};

export const subscribeToMessage = (cb) => {
  if (!socket) return true;

  socket.on("recieve-message", (messagePackage) => {
    cb(messagePackage);
  });
};

export const getColor = (cb) => {
  if (!socket) return true;

  socket.on("get-color", (color) => {
    cb(color);
  });
};

export const subscribeInitialMessages = (cb) => {
  if (!socket) return true;

  socket.on("message-list", (data) => {
    cb(data);
  });
};

export const subscribeInitialColor = (cb) => {
  if (!socket) return true;

  socket.on("changed-color", (data) => {
    cb(data);
  });
};
