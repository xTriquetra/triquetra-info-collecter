
const Discord = require("discord.js");
var http = require("https");
const needle = require('needle');
const request = require('request');
module.exports.run = async (client, message, args) => {
var address = args[0]


needle.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_FWU5b3DZPOVt8vH5CtMZ3Bm721IZe&domainName=${address}`, function(error, response, body) {
  
  
 
  let embed = new Discord.RichEmbed()
  .setColor('#E8E8E8')
  .setAuthor('Site Info Tool by TRV')
  .setDescription(`${address} Bilgileri;`)
  .addField(`Creation Date:`, `${body.createdDateNormalized}`, true)
  .addField(`Last Update Date:`, `${body.updatedDateNormalized}`, true)
  .addField(`Domain Death Date:`, `${body.expiresDateNormalized}`, true)
  .addField(`Site IP Number:`, `${body.ips}`, true)
  .addField(`Site Gmails:`, `${body.contactEmail}`, true)
  
  
    
  
  
  message.channel.send(embed)
})

        
        
        
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sitehistory"],
  permLevel: 0
};

module.exports.help = {
  name: 'site-history',
  description: 'Site History',
  usage: 'site-history'
};


