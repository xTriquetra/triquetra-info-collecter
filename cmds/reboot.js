const Discord = require('discord.js');


exports.run = async (client, message) => {

if (message.author.id == "ID" || message.author.id == "ID") {
  message.channel.send("Bot Restarting :wave:").then(msg => {
    process.exit(0)
    });
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot', 
  description: 'Restart Bot',
  usage: 'reboot'
};