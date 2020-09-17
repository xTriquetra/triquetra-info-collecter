const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      if(message.author.id !== "ID") return;
    if (args[0] === "client.token", "ayarlar.token")
    return message.channel.sendMessage('Fuck OFF');
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.send(`\`Error\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Try Codes.',
  usage: 'eval [kod]'
};