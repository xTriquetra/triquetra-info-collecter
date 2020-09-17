const Discord = require ("discord.js");
var Base64 = require('js-base64').Base64;

exports.run = (client, message, args) => {
  
  let zuha = args.slice(0).join(' ')

let mu = Base64.decode(`${zuha}`);
  message.channel.send(`Decoded Sentence:${mu} Encrypted Cümle: ${zuha}`)
  
  
  
};
exports.conf = {
    enabled: true, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'base64-d', 
    description: 'Base64 to Decode', 
    usage: 'base64-d' 
  };