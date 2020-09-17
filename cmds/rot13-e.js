const Discord = require("discord.js");
const caesarSalad = require('caesar-salad');
const ROT13 = caesarSalad.ROT13;

exports.run = (client, message, args) => {
  
  let zuha = args.slice(0).join(' ')
  
let za = ROT13.Cipher().crypt(`${zuha}`)
  
  message.channel.send(`Decoded Sentence: ${zuha}`)

  message.channel.send(`Encrypted Sentence:${za}`)
  
  
  
};
exports.conf = {
    enabled: true, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'rot13-e', 
    description: 'Encrypt to ROT13', 
    usage: 'rot13-e' 
  };