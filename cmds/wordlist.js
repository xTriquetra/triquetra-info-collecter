
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let randomsayı = '123456789'
  let za31 = '12345678'
  
let adı;
  if (args[0] === '?') {
    adı = '';
    } else {
      adı = args[0]
    }




let soyadı;
  if (args[1] === '?') {
    soyadı = '';
    } else {
      soyadı = args[1]
    }
  
let nicknamesi;
  if (args[2] === '?') {
    nicknamesi = '';
    } else {
      nicknamesi = args[2]
    }
  

let doğumtarihi = args[3]
  if (args[3] === '?') {
  } else {
      doğumtarihi = args[3]
    }
  
let hayvanınadı;
  if (args[4] === '?') {
    hayvanınadı = '';
    } else {
      hayvanınadı = args[4]
    }





////SEVGİLİ IF
  
let sevgilisininadı;
  if (args[5] === '?') {
    sevgilisininadı = '';
    } else {
      sevgilisininadı = args[5]
    }







////TAKIM IF
let tuttuğutakım;
  if (args[6] === 'beşiktaş') {
    tuttuğutakım = '1903';
  } else {
    tuttuğutakım = '1903'
  }
    if (args[6] === 'fenerbahçe') {
    tuttuğutakım = '1907';
  } else {
    tuttuğutakım = '1907'
  }
  
    if (args[6] === 'galatasaray') {
    tuttuğutakım = '1905';
  } else {
    tuttuğutakım = '1905'
  }
  
  if (args[6] === 'trabzonspor') {
    tuttuğutakım = '1961';
  } else {
    tuttuğutakım = '1961'
  }
  
  

  
  ////MEMLEKET IF
  
let memleketi;
  if (args[7] === '?') {
    memleketi = '';
    } else {
      memleketi = args[7]
    }

  
 message.channel.send('Wordlist Creating..')
  message.channel.send(`${adı}1999\n${adı}2000\n${adı}2001\n${adı}2002\n${adı}2003\n${adı}2004\n${adı}2005\n${adı}2006\n${adı}2007\n${adı}2008\n${adı}2009\n${adı}2010\n${adı}2011\n${adı}2012\n${adı}2013\n${adı}2014\n${adı}2015\n${adı}2016\n${adı}20017\n${adı}2018\n${adı}2019`)
message.channel.send(`${soyadı}1999\n${soyadı}2000\n${soyadı}2001\n${soyadı}2002\n${soyadı}2003\n${soyadı}2004\n${soyadı}2005\n${soyadı}2006\n${soyadı}2007\n${soyadı}2008\n${soyadı}2009\n${soyadı}2010\n${soyadı}2011\n${soyadı}2012\n${soyadı}2013\n${soyadı}2014\n${soyadı}2015\n${soyadı}2016\n${soyadı}2017\n${soyadı}2018\n${soyadı}2019\n${soyadı}2020`)
message.channel.send(`${nicknamesi}1999\n${nicknamesi}2000\n${nicknamesi}2001\n${nicknamesi}2002\n${nicknamesi}2003\n${nicknamesi}2004\n${nicknamesi}2005\n${nicknamesi}2006\n${nicknamesi}2007\n${nicknamesi}2008\n${nicknamesi}2009\n${nicknamesi}2010\n${nicknamesi}2011\n${nicknamesi}2012\n${nicknamesi}2013\n${nicknamesi}2014\n${nicknamesi}2015\n${nicknamesi}2016\n${nicknamesi}2017\n${nicknamesi}2018\n${nicknamesi}2019`)
message.channel.send(`${adı}${soyadı}1999\n${adı}${soyadı}2000\n${adı}${soyadı}2001\n${adı}${soyadı}2002\n${adı}${soyadı}2003\n${adı}${soyadı}2004\n${adı}${soyadı}2005\n${adı}${soyadı}2006\n${adı}${soyadı}2007\n${adı}${soyadı}2008\n${adı}${soyadı}2009\n${adı}${soyadı}2010\n${adı}${soyadı}2011\n${adı}${soyadı}2012\n${adı}${soyadı}2013\n${adı}${soyadı}2014\n${adı}${soyadı}2015\n${adı}${soyadı}2016\n${adı}${soyadı}2017\n${adı}${soyadı}2018\n${adı}${soyadı}2020`)
message.channel.send(`${adı}123\n${adı}1234\n${adı}12345\n${adı}123456\n${adı}1234567\n${adı}12345678\n${adı}123456789`)
  message.channel.send(`${adı}_123\n${adı}_1234\n${adı}_12345\n${adı}_123456\n${adı}_1234567\n${adı}_12345678\n${adı}_123456789`)
  message.channel.send(`${adı}${tuttuğutakım}\n${adı}${soyadı}${tuttuğutakım}\n${adı}${soyadı}_${tuttuğutakım}\n${adı}_${soyadı}${tuttuğutakım}\n${tuttuğutakım}${adı}${soyadı}${tuttuğutakım}\n${tuttuğutakım}${adı}${tuttuğutakım}${soyadı}${tuttuğutakım}${tuttuğutakım}`)
message.channel.send(`${adı}31\n${adı}${soyadı}31\n${adı}${soyadı}62\n${adı}3162\n${adı}_${soyadı}31\n${adı}_${soyadı}3162\n${adı}${soyadı}6231\n${adı}_${soyadı}6231\n${soyadı}${adı}31\n${soyadı}${adı}3162`)



}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'wordlist-create',
  description: 'Create Wordlist',
  usage: 'wordlist-create'
};


