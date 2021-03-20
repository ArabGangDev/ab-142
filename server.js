const Discord = require('discord.js');//npm i discord.js
const client = new Discord.Client();//client
const moment = require("moment");//npm i moment
const ms = require("ms");//npm i ms
const fs = require("fs");//npm i fs
const dateFormat = require('dateformat');//npm i dateformat
const Canvas = require("canvas");//npm i canvas
const prefix = ("$");//prefix
client.on("ready", () =>{//Ready
console.log('Online v0.9.5 v12');
        client.user.setActivity('$help | androbot.xyz')
});

////////////////Help

client.on('message', message => {//$help | Help

  if (message.content === prefix + "help") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setAuthor(message.author.tag, message.author.avatarURL())
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
<:general:801172797760995358> **| General Commands**
**\`-\` ${prefix}help general**

<:sparklesandro:795426662757695528> **| Admin Commands**
**\`-\` ${prefix}help admin**

<:music:806928505236750426> **| Music Commands**
**\`-\` ${prefix}help music**

<:rocket:795426662408912947> **| Fun Commands**
**\`-\` ${prefix}help fun**

<:maintenance:795426662350192643> **| Ticket Commands**
**\`-\` ${prefix}help ticket**

<:Partypopperandro:795426662590185492> **| Giveaway Commands**
**\`-\` ${prefix}help giveaway**

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help general | Help

  if (message.content === prefix + "help general") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:general:801172797760995358>** | General Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
<:hashtagandro:795426662216892436> **\`${prefix}short\`**
<:question:795426662363430953> Description: Shortens a link.

<:hashtagandro:795426662216892436> **\`${prefix}roles\`**
<:question:795426662363430953> Description: Get a list of all server roles.

<:hashtagandro:795426662216892436> **\`${prefix}emojis\`**
<:question:795426662363430953> Description: Get a list of all server emojis.

<:hashtagandro:795426662216892436> **\`${prefix}avatar / ${prefix}avatar server\`**
<:question:795426662363430953> Description: Get a user's/server avatar.

<:hashtagandro:795426662216892436> **\`${prefix}invites\`**
<:question:795426662363430953> Description: Get a user's invites.

<:hashtagandro:795426662216892436> **\`${prefix}user\`**
<:question:795426662363430953> Description: Get a user's information.

<:hashtagandro:795426662216892436> **\`${prefix}bot\`**
<:question:795426662363430953> Description: Get the bot information.

<:hashtagandro:795426662216892436> **\`${prefix}server\`**
<:question:795426662363430953> Description: Get a server information.

<:hashtagandro:795426662216892436> **\`${prefix}dev\`**
<:question:795426662363430953>Description: Get the developer information.

<:hashtagandro:795426662216892436> **\`${prefix}inv\`**
<:question:795426662363430953> Description: Get the bot invite link.

<:hashtagandro:795426662216892436> **\`${prefix}vote\`**
<:question:795426662363430953> Description: Get the bot vote link.

<:hashtagandro:795426662216892436> **\`${prefix}donate\`**
<:question:795426662363430953> Description: Get the bot donate link.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help admin | Help

  if (message.content === prefix + "help admin") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:sparklesandro:795426662757695528>** | Admin Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
<:hashtagandro:795426662216892436> **\`${prefix}say\`**
<:question:795426662363430953> Description: Send a message as a bot.

<:hashtagandro:795426662216892436> **\`${prefix}embed\`**
<:question:795426662363430953> Description: Send a message as a bot with embed.

<:hashtagandro:795426662216892436> **\`${prefix}clear\`**
<:question:795426662363430953> Description: Cleans messages from a channel.

<:hashtagandro:795426662216892436> **\`${prefix}mute\`**
<:question:795426662363430953> Description: Mutes a member.

<:hashtagandro:795426662216892436> **\`${prefix}unmute\`**
<:question:795426662363430953> Description: Unmutes a member.

<:hashtagandro:795426662216892436> **\`${prefix}ban\`**
<:question:795426662363430953> Description: Bans a member.

<:hashtagandro:795426662216892436> **\`${prefix}kick\`**
<:question:795426662363430953> Description: kicks a member.

<:hashtagandro:795426662216892436> **\`${prefix}unban\`**
<:question:795426662363430953> Description: UnBans a member.

<:hashtagandro:795426662216892436> **\`${prefix}bans\`**
<:question:795426662363430953> Description: List you all the banned members.

<:hashtagandro:795426662216892436> **\`${prefix}lock\`**
<:question:795426662363430953> Description: Disables everyone from sending messages in specific channel.

<:hashtagandro:795426662216892436> **\`${prefix}unlock\`**
<:question:795426662363430953>Description: Removes denied sending messages from everyone in specific channel.

<:hashtagandro:795426662216892436> **\`${prefix}show\`**
<:question:795426662363430953> Description: Disables everyone from seeing a specific channel.

<:hashtagandro:795426662216892436> **\`${prefix}hide\`**
<:question:795426662363430953> Description: Removes denied seeing channel from everyone in specific channel.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help Music | Help

  if (message.content === prefix + "help music") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:music:806928505236750426>** | Music Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
\`Note: Spotify is not supported at the moment❗\`

<:hashtagandro:795426662216892436> **\`${prefix}play\`**
<:question:795426662363430953> Description: Plays a song.

<:hashtagandro:795426662216892436> **\`${prefix}stop\`**
<:question:795426662363430953> Description: Stops the queue.

<:hashtagandro:795426662216892436> **\`${prefix}loop\`**
<:question:795426662363430953> Description: Loops the song/queue.

<:hashtagandro:795426662216892436> **\`${prefix}queue\`**
<:question:795426662363430953> Description: Shows you the current queue.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help fun | Help

  if (message.content === prefix + "help fun") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:rocket:795426662408912947>** | Fun Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
<:hashtagandro:795426662216892436> **\`${prefix}wasted\`**
<:question:795426662363430953> Description: Wasted effect on someone's avatar.

<:hashtagandro:795426662216892436> **\`${prefix}iq\`**
<:question:795426662363430953> Description: Gets someone's IQ.

<:hashtagandro:795426662216892436> **\`${prefix}spin\`**
<:question:795426662363430953> Description: Spin the fruits.

<:hashtagandro:795426662216892436> **\`${prefix}slap\`**
<:question:795426662363430953> Description: Slap a member.

<:hashtagandro:795426662216892436> **\`${prefix}hug\`**
<:question:795426662363430953> Description: Hug a member.

<:hashtagandro:795426662216892436> **\`${prefix}dice\`**
<:question:795426662363430953> Description: Roll a dice.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help ticket | Help

  if (message.content === prefix + "help ticket") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:maintenance:795426662350192643>** | Ticket Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
\`If you are a server owner you need to create **Support Team** Role like this excatly to enable the Ticket commands.\`

<:hashtagandro:795426662216892436> **\`${prefix}new\`**
<:question:795426662363430953> Description: Create a new ticket.

<:hashtagandro:795426662216892436> **\`${prefix}close\`**
<:question:795426662363430953> Description: Closes a ticket.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help giveaway | Help

  if (message.content === prefix + "help giveaway") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setTitle('<:Partypopperandro:795426662590185492>** | Giveaway Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
    .setColor("#d1afd2")
    .setDescription(`
<:hashtagandro:795426662216892436> **\`${prefix}gstart [winners] [time] [prize]\`**
<:question:795426662363430953> Description: Starts a giveaway.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v0.9.5\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

////////////////Fun
 client.on("message", message => { //$slap | Fun

    if (message.content.startsWith(prefix + "slap")) {
			if (message.author.bot) return;
       if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only** :no_entry:');
     var messageslap = message.mentions.members.first()

     if(!message.mentions.members.first()) return message.channel.send(`:no_entry: **Please mention someone** :no_entry:`);
     var messageembed = new Discord.MessageEmbed()
      .setTitle('Slap!')
	    .setDescription(`${message.author} Slapped ${messageslap} 😂`)
      .setImage(`https://media1.tenor.com/images/c724e1c1ddef332e3c95165c09e5b7e2/tenor.gif?itemid=16184358`)

      .setColor("#d1afd2")
      .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
      message.channel.send(messageembed);
}

});

client.on('message', message => {//$wasted | Fun
  if (message.content.startsWith(prefix + "wasted")) {
    if (message.author.bot) return;
    const user= message.mentions.users.first()||message.author
const Embed = new Discord.MessageEmbed()
.setTitle(`:boom: **WASTED!** :boom:`)
.setImage(`https://some-random-api.ml/canvas/wasted/?avatar=${user.avatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
.setColor("#d1afd2")
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
message.channel.send(Embed);
  }
});

client.on("message", message => { //$iq | Fun

  if (message.content.startsWith(prefix + "iq")) {
    if (message.author.bot) return;
     if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only** :no_entry:');
   var messageiq = message.mentions.members.first() || message.author
   const iq = Math.floor(Math.random() * 100) + 1 ;

   var messageembed = new Discord.MessageEmbed()
    .setTitle('IQ Test! :brain:')
    .setDescription(`${messageiq} IQ Level is \`${iq}%\` 🧠`)
    .setColor("#d1afd2")
    .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
    message.channel.send(messageembed);

}

});

 client.on("message", message => { //$hug | Fun

    if (message.content.startsWith(prefix + "hug")) {
			if (message.author.bot) return;
       if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only!** :no_entry:');
     var messagehug = message.mentions.members.first()

     if(!message.mentions.members.first()) return message.channel.send(`:no_entry: **Please mention someone** :no_entry:`);
     var Embed = new Discord.MessageEmbed()
      .setTitle('Hug!')
	  	    .setDescription(`${message.author} Hugged ${messagehug} :heart:`)
      .setImage(`https://media1.tenor.com/images/78900be69903453202d96d16e0e9ef3f/tenor.gif?itemid=14611093`)
      .setColor("#d1afd2")
      .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
      message.channel.send(Embed);
}

});

client.on('message', message => {//$dice | Fun

  if(message.content === prefix + "dice") {
	  var dice =["1🎲","2🎲","3🎲","4🎲","5🎲","6🎲","7🎲","8🎲","9🎲","10🎲"]
			if (message.author.bot) return;
       if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only!** :no_entry:');
   var Embed = new Discord.MessageEmbed()
  .setTitle('Dice Roll!')
  .setThumbnail(message.author.avatarURL())
  .setDescription(dice[Math.floor(Math.random() * dice.length)])
   .setColor('#d1afd2')
   .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
  message.channel.send(Embed);
  }

  });

client.on('message', message => {//$spin | Fun

    if (message.content === prefix + "spin") {
      if (message.author.bot) return;
		var winlose = message.mentions.members.first() || message.author
        let slot1 = ['🍇', '🍒', '🍓'];
        let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
        let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
        let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
        let result;
        if (slots1 === slots2 && slots2 === slots3) {
          result = `${winlose} You won!`;
        } else {
          result = `${winlose} You lost!`;
        }
        var Embed = new Discord.MessageEmbed()
		.setDescription(`${slots1} | ${slots2} | ${slots3} - ${result}`)
		.setColor('#d1afd2')
    .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
		message.channel.send(Embed);
    }

});

////////////////Member

const shorten = require("isgd");
client.on("message", message => {//$short | General
  if (message.content.startsWith(prefix + "short")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    message.channel;
    let args = message.content.split(" ").slice(1);
    if (!args[0])
      return message.channel.send(`:no_entry: **Usage: ${prefix}short [Link]** :no_entry:`);
    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        if (res.startsWith("Error:"))
          return message.channel.send(`:no_entry: **Usage: ${prefix}short [Link]** :no_entry:`);
          message.channel.send(`✅** Link has been shorted: ${res}**`);
      });
    } else {
      shorten.custom(args[0], args[1], function(res) {
        if (res.startsWith("Error:"))
          return message.channel.send(`:no_entry: **Usage: ${prefix}short [Link]** :no_entry:`);
          message.channel.send(`✅** Link has been shorted: ${res}**`);
      });
    }
  }
});

client.on('message', message => {//$invites | General
  if(message.content.startsWith(prefix + "invites")){
    if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_GUILD')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_GUILD** :no_entry:')
      var user = null;
      user = message.mentions.members.first() || message.author

      message.guild.fetchInvites()
      .then

      (invites =>
          {
              const userInvites = invites.array().filter(o => o.inviter.id === user.id);
              var userInviteCount = 0;
                  for(var i=0; i < userInvites.length; i++)
                  {
                      var invite = userInvites[i];
                      userInviteCount += invite['uses'];
                  }
                  const Embed = new Discord.MessageEmbed()
                  .setDescription(`**${user} has ${userInviteCount} Invites :dizzy:**`)
                  .setColor("#d1afd2")
                  .setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
                  message.channel.send(Embed);
          }
      )
  }
});

client.on('message', message => {//$inv | General

  if (message.content === prefix + "inv") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Invite AndroBot and start giving your server cool perks! :zap:')
    .setColor("#d1afd2")
    .setDescription('**[Click here  :eyes:](https://discord.com/api/oauth2/authorize?client_id=717762382524579841&permissions=8&scope=bot)**')
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$vote | General

  if (message.content === prefix + "vote") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Thank you for helping us to grow! :heart:')
    .setColor("#d1afd2")
    .setDescription('**[Click here to vote  :eyes:](https://discordbotlist.com/bots/androbot/upvote)**')
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$support | General

  if (message.content === prefix + "support") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Need help? We are always here to help. Join our support server now. :construction_worker:')
    .setColor("#d1afd2")
    .setDescription('**[Click here  :eyes:](https://discord.gg/9rQCg5mUby)**')
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$website | General

  if (message.content === prefix + "website") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Our website :globe_with_meridians:')
    .setColor("#d1afd2")
    .setDescription('**[Click here  :eyes:](https://androbot.xyz/)**')
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$donate | General

  if (message.content === prefix + "donate") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Your donation is greatly appreciated. :heart:')
    .setColor("#d1afd2")
    .setDescription('**[Click here to donate  :heart:](https://paypal.me/zy4dyt)**')
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$dev | General

if(message.content === prefix  + "dev") {
	if (message.author.bot) return;

 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail("https://cdn.discordapp.com/attachments/798658467061432360/817875459949723678/d9d080038b679d05313b458bc87791b6.png")
 .setTitle('Developer information')
 .addField(':crown:** Name:**',`Zyad`,false)
 .addField(':beginner:** Age:**',`14`,false)
 .addField(':earth_africa:** Country:**',`Saudi Arabia`,false)
 .addField(':id:** ID:**',`361855205664489475`,true)
 .setTimestamp()
 .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
}
});

client.on("message", message =>{//$avatar, $avatar server | General

if(message.content === prefix + "avatar server"){
	if (message.author.bot) return;
    let dis = new Discord.MessageEmbed()
    .setColor('#d1afd2')
    .setAuthor(message.guild.name, message.guild.iconURL({ format: 'png', dynamic: true}))
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
    message.channel.send(dis)

} else if(message.content.startsWith(prefix + "avatar")){
	if (message.author.bot) return;
let user = message.mentions.users.first() || message.author
let dis2 = new Discord.MessageEmbed()
.setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL())
.setTitle("Avatar Link")
.setColor('#d1afd2')
.setURL(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setImage(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
return message.channel.send(dis2)

}
});

client.on('message', message => {//$user | General
  if(message.content.startsWith (prefix  + "!user")) {
      if (message.author.bot) return;
    let user = message.mentions.members.first()
   let Embed = new Discord.MessageEmbed()
   .setColor("#d1afd2")
     .setAuthor(user.username,user.avatarURL())
   .setThumbnail(user.avatarURL())
   .setTitle(`**User Info:**`)
   .addField(':bust_in_silhouette:** Username:**',`[ ${user.tag} ]`,false)
   .addField(':id:** ID:**',`[ ${user.id} ]`,false)
   .addField(':date:** Created At:**',`[ ${user.createdAt.toLocaleString()} ]`,false)
   .setTimestamp()
   .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
   message.channel.send(Embed);
  }
  });

  client.on('message', message => {//$user | General
    if(message.content.startsWith (prefix  + "user")) {
        if (message.author.bot) return;
      let user = message.mentions.users.first() || message.author
     let Embed = new Discord.MessageEmbed()
     .setColor("#d1afd2")
       .setAuthor(user.username,user.avatarURL())
     .setThumbnail(user.avatarURL())
     .setTitle(`**User Info:**`)
     .addField(':bust_in_silhouette:** Username:**',`[ ${user.tag} ]`,false)
     .addField(':id:** ID:**',`[ ${user.id} ]`,false)
     .addField(':date:** Created At:**',`[ ${user.createdAt.toLocaleString()} ]`,false)
     .setTimestamp()
     .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
     message.channel.send(Embed);
    }
    });


client.on('message', message => {//$bot | General

if(message.content === (prefix  + "bot")) {
	if (message.author.bot) return;
 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail("https://cdn.discordapp.com/attachments/785215109710479437/793441456429203456/christmas_logo3.png")
 .setTitle(`**AndroBot:**`)
 .addField(':airplane:** Bot ping:**',`[ ${Math.round(client.ws.ping)}ms ]`,true)
 .addField(':earth_africa:** Servers:**',`[ ${client.guilds.cache.size} ]`,true)
 .addField(':beginner:** Users:**',`[ ${client.users.cache.size} ]`,true)
 .addField(':hash:** Channels:**',`[ ${client.channels.cache.size} ]`,true)
 .addField(':robot:** Bot ID:**',`[ ${client.user.id} ]`,true)
 .addField(':crown:** Bot developer:**',`[ Zyad#1947 ]`,false)
 .setTimestamp()
 .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
}

});

client.on('message', message => {//$server | General

if(message.content === (prefix  + "server")) {
	if (message.author.bot) return;
 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail(message.guild.iconURL())
 .setTitle(`**${message.guild.name}:**`)
 .addField(':globe_with_meridians:** Server region:**',`[ ${message.guild.region} ]`,true)
  .addField(':medal:** Roles:**',`[ ${message.guild.roles.cache.size} ]`,true)
 .addField(':red_circle:** Members:**',`[ ${message.guild.memberCount} ]`,true)
 .addField(':pencil:** Text channels:**',`[ ${message.guild.channels.cache.filter(m => m.type === 'text').size} ]`,true)
 .addField(':microphone:** Voice channels:**',`[ ${message.guild.channels.cache.filter(m => m.type === 'voice').size} ]`,true)
 .addField(':crown:** Server owner:**',`${message.guild.owner}`,true)
 .addField(':id:** Server ID:**',`${message.guild.id}`,true)
 .addField(':date:** Created On:**',message.guild.createdAt.toLocaleString())
 .setTimestamp()
 .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
 message.channel.send(Embed);
}

});

client.on('message', message => {//$roles | General

  if (message.content.startsWith(prefix + "roles")) {
	  if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_ROLES** :no_entry:')
      const Rank = message.guild.roles.cache.map(e => e.toString()).join(" ");

      let Embed = new Discord.MessageEmbed()
          .setTitle(`**${message.guild.name} Roles :**`)
		  .setThumbnail(message.guild.iconURL())
          .setColor("#d1afd2")
          .setDescription(Rank)
          .setTimestamp()
          .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
      message.channel.send(Embed)
  }

});

client.on('message', message => {//$emojis | General

  if (message.content.startsWith(prefix + "emojis")) {
	  if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_EMOJIS** :no_entry:')
      const emojis = message.guild.emojis.cache.map(e => e.toString()).join(" ");

      let Embed = new Discord.MessageEmbed()
          .setTitle(`**${message.guild.name} Emojis :**`)
		  .setThumbnail(message.guild.iconURL())
          .setColor("#d1afd2")
          .setDescription(emojis)
          .setTimestamp()
          .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
      message.channel.send(Embed)
  }

});

////////////////Admin

client.on('message', async message => {//$mute | Admin
  if(message.content.startsWith(prefix + 'mute')) {
    if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: You do not have the Permission to do this action. **ADMINISTRATOR** :no_entry:`);
    var args = message.content.split(" ").slice(2).join(" ")

  let mention = message.mentions.members.first();

  let member = message.mentions.members.first()

  let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
  if(!role) {
      message.guild.roles.create({
          data: {
              name: 'Muted',
              permissions: [],
              color: 'GREY'
          }
      })
  }
  if(mention.roles.cache.has(role.id)) return message.channel.send(":no_entry:** This member is already muted! **:no_entry:");
  if(!mention) return message.channel.send(`:no_entry: ** Usage: ${prefix}mute [member] [reason] ** :no_entry:`);
    if (member.user.id === message.author.id) return message.channel.send(`:no_entry: **You Can't Mute YourSelf!** :no_entry:`);
  if (member.user.id === client.user.id) return message.channel.send(`:no_entry: **I Can't Find This Member** :no_entry:`);
  message.guild.channels.cache.forEach(c => {
  c.updateOverwrite(role , {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
  });
  });

  mention.roles.add(role)

  message.channel.send(`✅** ${mention.user.tag} has been muted, Reason : ${args || "No reason provided."}**`)
  let Embed = new Discord.MessageEmbed()
  .setThumbnail(message.guild.iconURL())
  .setTitle(`You Have Been Muted`)
  .setDescription(`**
   Server : ${message.guild.name}
   Reason : ${args || "No reason provided."}
   By : ${message.author}
  **`)
  .setColor("#d1afd2")
  .setFooter('Id ' + message.author.id, message.author.avatarURL())
  member.send(Embed);
  }
  });

client.on('message', async message => {//$unmute | Admin
if(message.content.startsWith(prefix + 'unmute')) {
  if (message.author.bot) return;
  if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry: I do not have the Permission to do this action. **ADMINISTRATOR** :no_entry:')
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: You do not have the Permission to do this action. **ADMINISTRATOR** :no_entry:`);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention.roles.cache.has(role.id)) return message.channel.send(":no_entry:** This member is not muted! **:no_entry:");
if(!mention) return message.channel.send(`:no_entry: **Usage: ${prefix}unmute [member]** :no_entry:`);
if (member.user.id === message.author.id) return message.channel.send(`:no_entry: **You Can't Unmute YourSelf!** :no_entry:`);
if (member.user.id === client.user.id) return message.channel.send(`:no_entry: **I Can't Find This Member** :no_entry:`);
mention.roles.remove(role)
message.channel.send(`✅** ${mention.user.tag} has been unmuted.**`)
let Embed = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been Unmuted`)
.setDescription(`**
 Server : ${message.guild.name}
 By : ${message.author}
**`)
.setColor("#d1afd2")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(Embed);
}
});

client.on('message', async (message) => { //$clear | Admin
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear')
  ) {
    if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:')
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send(":no_entry: You do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:");
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }

      await message.delete().catch(e => { amount++; });

      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`✅** ${_message.size} messages has been cleared**`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });
    } else {
      message.channel.send(':no_entry: **enter the amount of messages that you would like to clear** :no_entry:').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  }
});

client.on("message", message => {//$unban | Admin
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (message.author.bot) return;
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: I do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: You do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return message.channel.send(":no_entry:** Member ID is missing **:no_entry:");
    message.guild.members
      .unban(args)
      .then(m => {
        message.channel.send(`✅** ${m.username} has been unbanned.**`);
      })
      .catch(stry => {
        message.channel.send(
          `**:no_entry:** \`${args}\` is not banned.**:no_entry:**`
        );
      });
  }
});

client.on('message', message => {//$bans | Admin

  if (message.content === prefix + "bans") {
	  if (message.author.bot) return;
    if (!message.channel.guild) return;
    if(!message.guild.me.hasPermission('MANAGE_GUILD')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_GUILD** :no_entry:')
	if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply(':no_entry: You do not have the Permission to do this action. **MANAGE_GUILD** :no_entry:')
    message.channel
    let banslist = []
    message.guild.fetchBans().then(banned  => {
      let list = banned.map(user => user.user.tag).join('\n');
    let Embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} Ban list:`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(`**:house_abandoned: ${banned.size} is banned on this server!**`)
    .setColor("#d1afd2")
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
   message.channel.send(Embed)
    .catch(console.error)

    })
}
});

client.on('message', message =>{//$ban | Admin

if(message.content.startsWith(prefix + "ban")){
	if(message.content === prefix + "bans") return;
	    var member = message.mentions.members.first()
var memb = message.content.split(" ").slice(2).join(" ")
		if(message.channel.type === "dm") return;
    if (message.author.bot) return;
      if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: I do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: You do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
  if(!member) return message.reply(':no_entry:** Mention someone to ban. **:no_entry:')
  if(!memb) return message.reply(":no_entry:** You need to write a reason. **:no_entry:")

  member.ban().then(s => {
    message.channel.send(`✅** ${member} has been banned. Reason: ${memb} **`)
  })
  .catch(err => {
    message.channel.send(`:no_entry: **I couldn't ban that user. Please check my permissions and role position.** :no_entry:`)
   console.error(err)
  });
}
});

client.on('message', message =>{//$kick | Admin

  if(message.content.startsWith(prefix + "kick")){
        var member = message.mentions.members.first()
  var memb = message.content.split(" ").slice(2).join(" ")
      if(message.channel.type === "dm") return;
      if (message.author.bot) return;
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: I do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry: You do not have the Permission to do this action. **BAN_MEMBERS** :no_entry:')
    if(!member) return message.reply(':no_entry:** Mention someone to ban. **:no_entry:')
    if(!memb) return message.reply(":no_entry:** You need to write a reason. **:no_entry:")

    member.ban().then(s => {
      message.channel.send(`✅** ${member} has been banned. Reason: ${memb} **`)
    })
    .catch(err => {
      message.channel.send(`:no_entry: **I couldn't ban that user. Please check my permissions and role position.** :no_entry:`)
     console.error(err)
    });
  }
  });

 client.on("message", message => {//$say, $embed | Admin

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
	  		  if (message.author.bot) return;
    if (!message.channel.guild)
      return message.channel
        .send(":no_entry: **This command is for servers only!** :no_entry:")
        .then(m => m.delete(5000));
		if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:')
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(":no_entry: You do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:");
    message.delete();
    message.channel.send(args.join(" "));
  }
  if (command == "embed") {
	  		  if (message.author.bot) return;
    if (!message.channel.guild)
      return message.channel
        .send(":no_entry: **This command is for servers only!** :no_entry:")
        .then(m => m.delete(5000));
		if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:')
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(":no_entry: You do not have the Permission to do this action. **MANAGE_MESSAGES** :no_entry:");
    let Embed = new Discord.MessageEmbed()
      .setDescription(args.join("  "))
      .setColor("#d1afd2");
    message.channel.send(Embed);
    message.delete();
  }

});

client.on('message', message => {//$lock & $unlock | Admin

    if (message.content === prefix + "lock") {
			   if (message.author.bot) return;
                        if(!message.channel.guild) return  message.channel.send(':no_entry: This command is only for servers! :no_entry:');
	  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:')
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:');
           message.channel.updateOverwrite(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
                message.channel.send(`🔒** <#${message.channel.id}> has been locked.**`)
           });
             }
if (message.content === prefix + "unlock") {
		   if (message.author.bot) return;
    if(!message.channel.guild) return  message.channel.send(':no_entry: This command is only for servers! :no_entry:');

	  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:')
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:');
           message.channel.updateOverwrite(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.channel.send(`🔓** <#${message.channel.id}> has been Unlocked.**`)
           });
             }


});

client.on('message', message => {//$show & $hide | Admin

    if (message.content === prefix + "show") {
			   if (message.author.bot) return;
                        if(!message.channel.guild) return  message.channel.send(':no_entry: This command is only for servers! :no_entry:');
	  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:')
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:');
           message.channel.updateOverwrite(message.guild.id, {
         VIEW_CHANNEL: true

           }).then(() => {
                message.channel.send(`✅** <#${message.channel.id}> has been shown.**`)
           });
             }
if (message.content === prefix + "hide") {
		   if (message.author.bot) return;
    if(!message.channel.guild) return  message.channel.send(':no_entry: This command is only for servers! :no_entry:');

	  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:')
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:');
           message.channel.updateOverwrite(message.guild.id, {
         VIEW_CHANNEL: false

           }).then(() => {
               message.channel.send(`✅** <#${message.channel.id}> has been hidden.**`)
           });
             }

});

////////////////Music

client.on("message", message => {
  if(message.content === prefix + "play") {
    message.channel.send(":no_entry:** You didn't gave me something to play! **:no_entry:")
  }
});

const DisTube = require('distube');
const { replace } = require('ffmpeg-static');
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  if (command == "play"){
 distube.play(message, args.join(" "));
  }

  if (command == "loop") {
    let mode = distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "Loop queue" : "Loop song" : "Off";
    message.channel.send(":white_check_mark: **Loop mode has been set to `" + mode + "`**");
}

  if (command == "stop") {
      distube.stop(message);
      message.channel.send(":white_check_mark: **Music has been stopped.**");
  }

  if (command == "skip") {
    distube.skip(message);
    message.channel.send(":white_check_mark: **Music has been skipped.**")
  }


  if (command == "queue") {
      let queue = distube.getQueue(message);
      if(!queue) return message.channel.send(":no_entry:** The Queue is empty! **:no_entry:")
      message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
          `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
      ).slice(0, 10).join("\n"));

  }

});

const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube
  .on("playSong", (message, queue, song) => message.channel.send(
      `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
  ))
  .on("addSong", (message, queue, song) => message.channel.send(
      `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
  ))
  .on("playList", (message, queue, playlist, song) => message.channel.send(
      `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``
  ))
  .on("addList", (message, queue, playlist) => message.channel.send(
      `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
  ))
  // DisTubeOptions.searchSongs = true
  .on("searchResult", (message, result) => {
      let i = 0;
      message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
  })
  .on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
})
  // DisTubeOptions.searchSongs = true
  .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
  .on("error", (message, e) => {
      console.error(e)
      message.channel.send(":no_entry:** Androbot doesn't support this URL at the moment. **:no_entry:");
  });


////////////////Other

client.on("message", message => {//$!servers | Other

  if (message.content.startsWith(prefix + "!servers")) {
    if (message.author.bot) return;
    if (message.author.id !== "361855205664489475" && message.author.id !== "518020270389198848") {
      message.channel.send(
        `:no_entry: **Sorry ${message.author.username} You Can't Use This Command** :no_entry:`
      );
    } else {
      let servers = " ";
      let num = 0;
      client.guilds.cache.forEach(server => {
        num = num + 1;
        servers += `\`${num} - \`** ${server.name} **\n`;
      });
      message.channel.send(servers);
    }
  }

});

client.on('message', message =>{//suggestions
  var channel =  message.channel.id === "785225123799760917"
  if (message.author.id == "361855205664489475") return;
 if (!channel) return false;
  let suggestion = message.content.split(" ").slice('').join(" ")
  if(message.author.bot)return;
  if(message.content.startsWith(''))
 {
  message.delete()
  var Embed = new Discord.MessageEmbed()
  .setTitle("<:sparklesandro:795426662757695528> New Suggestion: ")
  .setThumbnail(message.author.avatarURL())
  .setColor("#d1afd2")
  .setDescription(`From: <@${message.author.id}>
  **Suggestion: ${suggestion}**`)
  .setTimestamp()
  .setFooter(`Suggestion by: ${message.author.tag}`, message.author.avatarURL());
  message.channel.send(Embed).then(embedMessage => {
    embedMessage.react(client.emojis.cache.get("795426662103384085"))
    embedMessage.react(client.emojis.cache.get("795426662069305366"))
     })
    }
});

client.on('guildCreate', guild => {//new server | Other
        client.channels.cache.get("801476479380095026")
        .send(new Discord.MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL())
        .setColor("GREEN")
        .setDescription(`> ${client.user.username} has **Joined** a new Server 🎉
 **ServerName:** ${guild.name}
 **GuildOwner:** ${guild.owner}
 **ServerID:** ${guild.id}
 **GuildsCount:** ${client.guilds.cache.size}`))
        });
        client.on('guildDelete', guild => {//leave server | Other
            client.channels.cache.get("801476479380095026")
            .send(new Discord.MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL())
        .setColor("RED")
        .setDescription(`> ${client.user.username} has **Leave** from a new Server 💔
**ServerName:** ${guild.name}
**GuildOwner:** ${guild.owner}
**ServerID:** ${guild.id}
**GuildsCount:** ${client.guilds.cache.size} `))

        });

////////////////Giveaway

client.on('message', async message => {
  let cmd = message.content.split(" ")[0];
  if (cmd == prefix + "gstart") {
    if (message.author.bot) return;
    if(!message.member.hasPermission('MANAGE_GUILD')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_GUILD** :no_entry:');
    let winners = message.content.split(" ")[1];
    let time = message.content.split(" ")[2];
    let prize = message.content.split(" ").slice(3).join(" ");
    if (!winners || !time || !prize) return message.channel.send(`:no_entry:** Usage: ${prefix}gstart [winners EX: 1] [time EX: 10m] [Prize EX: Nitro] **:no_entry:`);
    ///////time
    let ggg = ['d', "m", "h", "s"];
    if (ggg.some(c => time.endsWith(c))) {
      let timee = ms(time);
      console.log(timee);
      if (timee <= 9999) return message.channel.send(`:no_entry:** You Can't Make Giveaway Time Less Than 10sec. **:no_entry:`);
      /////winners
      if (timee > 518400000) return message.channel.send(`:no_entry: **You Can't Make Giveaway Time More Than 3Days.** :no_entry:`)
      if (isNaN(winners)) return message.channel.send(`:no_entry: **Type the number of the winners.** :no_entry:`);
      let wooners = Math.floor(winners);
      if (wooners >= 20 || wooners <= 0) return message.channel.send(`:no_entry: **Winners must be more Than 0 and more than 20.** :no_entry:`);
      ///// prize
      let tm = ms((timee - (Date.now() - (Date.now() + timee)) % 2), { long: true })
      let embed = new Discord.MessageEmbed()
        .setTitle('**Giveaway Started 🎉**')
        .setDescription(`**Prize : ${prize}\n Ends At : ${tm}**`)
        .setFooter(`${wooners} Winners | Hosted By : ${message.author.username}`)
        .setColor('#d1afd2')
 .setTimestamp()

      message.channel.send(embed).then(c => {
        c.react('🎉');
        asta(c, wooners, timee, prize, message.author.id);
      })
    } else {
      message.channel.send(":no_entry: **Given time is wrong please be sure to type s/m/h/d at the end of the time** :no_entry:");
    }
  }
})
function asta(message, winners, time, prize, hoster) {
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 2), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('**Giveaway Started 🎉**')
      .setDescription(`**Prize : ${prize}\n Ends At : ${tm}**`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('#d1afd2')
      .setTimestamp()

    message.edit(embed);

  }, time / 4);
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 4), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('**Giveaway Started 🎉**')
      .setDescription(`**Prize : ${prize}\n Ends At : ${tm}**`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('#d1afd2')
      .setTimestamp()

    message.edit(embed);

  }, time / 2);
  setTimeout(() => {
    message.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(async () => {
      let winner = "";
      let s = [];
      let m = await message.reactions.cache.get('🎉').users.cache;

      m.forEach((value, key) => {
        s.push(key);
      })



      console.log(m);

      for (i = 0; i <= winners - 1; i++) {
        console.log(s);

        let r = s[Math.floor(Math.random() * s.length)];
        console.log(r);
        winner += "<@" + r + ">";

      }
      if (message.reactions.cache.get('🎉').users.cache.size < 1) {
        let embed = new Discord.MessageEmbed()
          .setTitle('**Giveaway Ended 🎉**')
          .setDescription(`**I can not decide a winner**`)
          .setColor('#d1afd2')
          .setTimestamp()
        message.edit(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('Giveaway Ended 🎉')
          .setDescription(`**Hosted By : <@${hoster}>**\n **Winner/s :${winner}**`)
          .setColor('#d1afd2')
          .setTimestamp()
        message.edit(embed);
        message.channel.send(`**Congratulations ${winner} Won \`${prize}\` 🎉**`);
      }





    }, 1000)
  }, time)
}

////////////////Ticket

client.on("message", message => {//$new, $close | Ticket

if (message.content.toLowerCase().startsWith(prefix + "new")) {
  if (message.author.bot) return;
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.cache.some(r => r.name === 'Support Team')) return message.channel.send(`:no_entry: **This server doesn't have a \`Support Team\` role made, so the ticket won't be opened. :no_entry:**\n**If you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.**`);
    if (message.guild.channels.cache.some(r => r.name === "ticket-" + message.author.username)) return message.channel.send(`:no_entry: **You already have a ticket open.** :no_entry:`);
    message.guild.channels.create(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.cache.find(r => r.name === 'Support Team');
        let role2 = message.guild.roles.cache.find(r => r.name === '@everyone');
        c.createOverwrite(role, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });
        c.createOverwrite(role2, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });
        c.createOverwrite(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const Embed = new Discord.MessageEmbed()
        .setColor('#d1afd2')
        .addField(`Hey ${message.author.username}!`, 'Please try to explain in as much detail the reason for the opening of this ticket as possible. The support team will be with you shortly. To close this ticket type `$close`')
        .setTimestamp();
        c.send(Embed);
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + "close")) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`:no_entry: **You cannot use the close command outside the Ticket Channel.** :no_entry:`);

    message.channel.send('Are you sure? Once confirmed, you cannot reverse this action! To confirm, type `$close`. The command will be canceled after 20 seconds if you do not write a confirmation.')
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '$close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit(':no_entry: **Ticket close timed out, the ticket was not closed.** :no_entry:').then(m2 => {
              m2.delete({ timeout: 5000 });
			  });
        });
    });
}

});
client.login(process.env.BOT_TOKEN); //token
