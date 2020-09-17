

const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const settings = require('../settings.json')

var prefix = settings.prefix;

module.exports = client => {
  console.log(`Commands READY!`);
  client.user.setStatus("online");

    var game = [
        "Hacking Bot",
        "Wordlist Maker by TRV",
        "Coded By TRV"

    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(game.length-0+1)+0);

        client.user.setGame(game[random], );
        }, 2 * 3000);
  
};


