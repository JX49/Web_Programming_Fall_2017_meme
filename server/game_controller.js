const express = require("express");
const game =require("./game_object");

const router = express.Router();
router
    .get("/pictures",(req, res) => res.send(game.pictures))
    .get("/quotes",(req, res) => res.send(game.quotes))

    module.exports.router = router;