const Discord = require("discord.js");
var http = require("https");
const needle = require('needle');
const request = require('request');
const domainPing = require("domain-ping");
var ping = require('ping');
module.exports.run = async (client, message, args) => {
var address = args.join(' ').slice(0)

domainPing(address).then((res) => {
  
  let aktif;
  if (res.online === 'true') {
    aktif = 'Yes'
  } else {
    aktif = 'No'
  }
  
    let ping;
  if (res.ping === 'true') {
    ping = 'Yes'
  } else {
    ping = 'No'
  }
  
     let check = new Discord.RichEmbed()
     .setColor('#E8E8E8')
     .addField(`Domain:`, `${res.domain}`)
     .addField(`Domain IP:`, `${res.ip}`)
     .addField(`Ping:`, `${ping}`)
     .addField(`Active?:`, `${aktif}`)

     message.channel.send(check)
     
    })
  
    
  


        
        
        
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["domain-check"],
  permLevel: 0
};

module.exports.help = {
  name: 'domain-check',
  description: 'Domain Check',
  usage: 'domain-check'
};


