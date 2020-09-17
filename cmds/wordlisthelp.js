
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let wyardım = new Discord.MessageEmbed()
  .setColor('#E8E8E8')
  .setDescription('Info Collecting Bot by TRV')
  .addField('Wordlist', '-wordlist-create <name> <surname> <nick name> <date of birth> <pet name> <darling name> <team> <Plate Code>')
  .addField('IP Info', '-ip <IP>')
  .addField('Domain Info', '-domain-check <Site>')
  .addField('Domain Geçmişi[BETA]', '-site-history <Site>')
  .addField('DDOS[BETA]', '-ddos <Site w/Http(s)> <Port>')
 .addField('Password Decoding', '-rot13-d, -ascii-d, -base64-d')
  .addField('Password Encoding', '-rot13-e, -ascii-e, -base64-e')
  
  
  message.channel.send(wyardım)


}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

module.exports.help = {
  name: 'help',
  description: 'Help Commands',
  usage: 'help'
};




