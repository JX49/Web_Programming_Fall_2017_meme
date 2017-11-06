"use strict";
const quotes = require("./quotes");
const pictures = require("./pictures")

let iCurrentPicture = 0;
let iCurrentQuote = 0;

const game = {
    pictures: pictures,
    getNextPicture: ()=> game.pictures[iCurrentPicture++],
    quotes: quotes,
    getNextQuote: ()=> game.quotes[iCurrentQuote++],
    room: {
        picture: "",
        quotes: []
    }
}

module.exports = game;