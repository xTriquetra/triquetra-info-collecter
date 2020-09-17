const Discord = require ("discord.js");
const ascii = require('@aureooms/js-codec-ascii')
exports.run = (client, message, args) => {
  
  let zuha = args.slice(0).join(' ')
let za = ascii.decode(`[${zuha}]`)
  message.channel.send(`Decoded Sentence: ${zuha} Decoded Sentence: ${za}`)
  
  
  
};
exports.conf = {
    enabled: true, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'ascii-d', 
    description: 'ASCII Decoder', 
    usage: 'ascii-d' 
  };