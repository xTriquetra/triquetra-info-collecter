const Discord = require ("discord.js");
const ascii = require('@aureooms/js-codec-ascii') ;
const base64 = require('@aureooms/js-codec-base64') ;

exports.run = (client, message, args) => {
  
  let zuha = args.slice(0).join(' ')
let za = ascii.encode(`${zuha}`)
let mu = base64.decode( za )
  message.channel.send(`Decoded Sentence: ${zuha} Encrypted Sentence: ${mu}`)
  
  
  
};
exports.conf = {
    enabled: true, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'base64-e', 
    description: 'Base64 to Encode', 
    usage: 'base64-e' 
  };