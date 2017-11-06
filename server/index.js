
const express = require("express");
const handler = require("./httpHandler.js")
const gameController = require("./game_controller"); 
const bodyParser = require("body-parser");


const server = express();

server.use(bodyParser.urlencoded());
server.use("/client",express.static("./jquery_mockup"))
server.use("/old", handler.main);
server.use("/game", gameController.router);

server.listen(3000);

console.log("http://localhost:3000");