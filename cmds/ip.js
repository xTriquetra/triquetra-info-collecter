
const Discord = require("discord.js");
var http = require("https");
const needle = require('needle');
const request = require('request');
module.exports.run = async (client, message, args) => {
var address = args[0]
needle.get(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_4vaFQ0qZrFXv2qe1U4mgnPZU5NWEy&ipAddress=` + address, function(error, response, body) {
  let zuha;
  if (!body.location.postalCode) {
    zuha = 'Not'
  } else {
    zuha = body.location.postalCode
  }
  
  let şehir;
  if (!body.location.city) {
    şehir = 'Uncertain'
  } else {
    şehir = body.location.city
  }
  
    let lokasyon;
  if (!body.location.country) {
    lokasyon = 'Uncertain'
  } else {
    lokasyon = body.location.country
  }
  
      let interneti;
  if (!body.as.name) {
    interneti = 'Uncertain'
  } else {
    interneti = body.as.name
  }

        let zamanfarkı;
  if (!body.location.timezone) {
    zamanfarkı = 'Uncertain'
  } else {
    zamanfarkı = body.location.timezone
  }
  
          let enlem;
  if (!body.location.lat) {
    enlem = 'Uncertain'
  } else {
    enlem = body.location.lat
  }
  
    
          let boylams;
  if (!body.location.lng) {
    boylams = 'Uncertain'
  } else {
    boylams = body.location.lng
  }
  
            let isp;
  if (!body.isp) {
    isp = 'Uncertain'
  } else {
    isp = body.isp
  }
  
  let za;
  if(!body.connectionType) {
    za = 'Uncertain'
  } if (za = 'mobile') {
    za = 'Phone'
  } if (za = 'pc') {
    za = 'Desktop'
  } else {
    za = body.connectionType
  }
  
  
    let embed = new Discord.RichEmbed()
  .setColor('#E8E8E8')
  .setAuthor('IP Bilgileri Tool by TRV')
  .setDescription(`${address} Bilgileri;`)
  .addField(`Location:`, `${lokasyon}`, true)
  .addField(`City:`, `${şehir}`, true)
  .addField(`ZIP Code:`, `${zuha}`, true)
  .addField(`Time Difference:`, `${zamanfarkı}`)
  .addField(`Registered Internet Provider:`, `${interneti}`)
  .addField(`Internet Provider Zone:`, `${isp}`)  
    .addField(`Connection Type:`, `${za}`)
    .addField(`Latitude:`, `${enlem}`)
  .addField(`Longitude:`, `${boylams}`)
    
  
  
  message.channel.send(embed)
})

        
        
        
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ip"],
  permLevel: 0
};

module.exports.help = {
  name: 'ip',
  description: 'IP Information',
  usage: 'ip'
};


