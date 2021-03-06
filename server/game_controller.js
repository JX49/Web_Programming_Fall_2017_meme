const express = require("express");
const game = require("./game_object");

const router = express.Router();
router
    .get("/pictures",(req, res) => res.send(game.pictures))
    .get("/quote",(req, res) => res.send(game.getNextQuote()))
    .get("/quotes",(req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .get("/room", (req, res) => res.send(game.room.quotes))
    .post("/room/picture",(req, res) => {
        game.room.picture = game.getNextPicture();
        game.room.quotes = [];
        res.status(201).res.send(game.room.picture);
    })
    .post("/room/quotes",(req, res) => {
        game.room.quotes.push(req.body);
        
        res.status(201).res.send(game.getNextQuote());
})
    .post("/room/quotes/choose",(req, res) => {
        const chosen = game.room.quotes[req.body.i];
        chosen.chosen = true;
        game.room.dealer = (game.room.dealer + 1) % game.room.players.length;
        res.status(201).send(chosen);
    })


    .post("/room/players",(req, res) => {
        if(req.body.password == "password"){ 
            const player = {name: req.body.name, id: game.room.players.length};
            game.room.players.push(player);
            res.status(201).res.send(player);
        }else{
            res.status(403).send("invalid password or username");

        }
   
})

    module.exports.router = router;