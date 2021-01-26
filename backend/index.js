const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
let port = process.env.PORT || 3000;

const Messages = require("./libs/Messages");
const Color = require("./libs/Color");

let numberOfConnections = -1;

app.get("/", (req, res) => {
  res.sendFile("Hello Socket.io");
});

io.on("connection", (socket) => {
  //console.log("a user connected");
  numberOfConnections++;
  io.emit("number-of-connections", numberOfConnections);

  Messages.list((data) => io.emit("message-list", data));
  Color.list((color) => io.emit("changed-color", color));

  socket.on("user", (name) => {
    socket.broadcast.emit("name", name);
  });

  socket.on("message", (messagePackage) => {
    socket.broadcast.emit("recieve-message", messagePackage);
    Messages.upsert(messagePackage);
  });

  socket.on("color", (color) => {
    socket.broadcast.emit("get-color", color);
    Color.upsert(color);
  });

  socket.on("disconnect", () => {
    //console.log("user disconnect");
    numberOfConnections--;
    io.emit("number-of-connections", numberOfConnections);
  });
});

http.listen(port, () => {});
