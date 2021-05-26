const Discord = require("discord.js");//npm i discord.js
const client = new Discord.Client();//client
const moment = require("moment");//npm i moment
const ms = require("ms");//npm i ms
const fs = require("fs");//npm i fs
const dateFormat = require("dateformat");//npm i dateformat
const Canvas = require("canvas");//npm i canvas
const DIG = require("discord-image-generation");//npm i discord-image-generation
const shorten = require("isgd");//npm i isgd
const DisTube = require("distube");//npm i distube
const { replace } = require("ffmpeg-static");//npm i ffmpeg-static
const prefix = ("$");//prefix
client.on("ready", () =>{//Ready
console.log('Online v1.2!');
        client.user.setActivity('$help | androbot.xyz')
});

////////////////Help

client.on('message', message => {

  if (message.content.toLowerCase() === prefix + "help") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
	.setAuthor(message.guild.name, message.guild.iconURL())
  .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
    .setColor("#d1afd2")
    .setDescription(`
> <:general:801172797760995358> **| General Commands**
> **\`-\` ${prefix}help general**

> <:sparklesandro:795426662757695528> **| Admin Commands**
> **\`-\` ${prefix}help admin**

> <:music:806928505236750426> **| Music Commands**
> **\`-\` ${prefix}help music**

> <:rocket:795426662408912947> **| Fun Commands**
> **\`-\` ${prefix}help fun**

> <:maintenance:795426662350192643> **| Ticket Commands**
> **\`-\` ${prefix}help ticket**

> <:Partypopperandro:795426662590185492> **| Giveaway Commands**
> **\`-\` ${prefix}help giveaway**

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v1.2\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
  .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help general | Help

  if (message.content.toLowerCase() === prefix + "help general") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
	.setTitle('<:general:801172797760995358>** | General Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
    .setColor("#d1afd2")
    .setDescription(`
> <:hashtagandro:795426662216892436> **\`${prefix}short\`**
> <:question:795426662363430953> Description: Shortens a link.

> <:hashtagandro:795426662216892436> **\`${prefix}roles\`**
> <:question:795426662363430953> Description: Get a list of all server roles.

> <:hashtagandro:795426662216892436> **\`${prefix}emojis\`**
> <:question:795426662363430953> Description: Get a list of all server emojis.

> <:hashtagandro:795426662216892436> **\`${prefix}avatar / avatar server\`**
> <:question:795426662363430953> Description: Get a user's/server's avatar.

> <:hashtagandro:795426662216892436> **\`${prefix}invites\`**
> <:question:795426662363430953> Description: Get a user's invites.

> <:hashtagandro:795426662216892436> **\`${prefix}user\`**
> <:question:795426662363430953> Description: Get a user's information.

> <:hashtagandro:795426662216892436> **\`${prefix}bot\`**
> <:question:795426662363430953> Description: Get the bot information.

> <:hashtagandro:795426662216892436> **\`${prefix}server\`**
> <:question:795426662363430953> Description: Get a server information.

> <:hashtagandro:795426662216892436> **\`${prefix}dev\`**
> <:question:795426662363430953>Description: Get the developer information.

> <:hashtagandro:795426662216892436> **\`${prefix}inv\`**
> <:question:795426662363430953> Description: Get the bot links.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v1.2\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
  .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help admin | Help

  if (message.content.toLowerCase() === prefix + "help admin") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle('<:sparklesandro:795426662757695528>** | Admin Commands**')
    .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
      .setColor("#d1afd2")
      .setDescription(`
> <:hashtagandro:795426662216892436> **\`${prefix}vote\`**
> <:question:795426662363430953> Description: Start a vote for the server members.

> <:hashtagandro:795426662216892436> **\`${prefix}setnick\`**
> <:question:795426662363430953> Description: Changes nickname for a member.

> <:hashtagandro:795426662216892436> **\`${prefix}vkick\`**
> <:question:795426662363430953> Description: kick a member from a voice channel.

> <:hashtagandro:795426662216892436> **\`${prefix}say\`**
> <:question:795426662363430953> Description: Send a message as a bot.

> <:hashtagandro:795426662216892436> **\`${prefix}embed\`**
> <:question:795426662363430953> Description: Send a message as a bot with embed.

> <:hashtagandro:795426662216892436> **\`${prefix}clear\`**
> <:question:795426662363430953> Description: Cleans messages from a channel.

> <:hashtagandro:795426662216892436> **\`${prefix}mute / unmute\`**
> <:question:795426662363430953> Description: Mutes / umutes a member.

> <:hashtagandro:795426662216892436> **\`${prefix}ban\`**
> <:question:795426662363430953> Description: Bans a member.

> <:hashtagandro:795426662216892436> **\`${prefix}kick\`**
> <:question:795426662363430953> Description: kicks a member.

> <:hashtagandro:795426662216892436> **\`${prefix}unban\`**
> <:question:795426662363430953> Description: UnBans a member.

> <:hashtagandro:795426662216892436> **\`${prefix}bans\`**
> <:question:795426662363430953> Description: List you all the banned members.

> <:hashtagandro:795426662216892436> **\`${prefix}lock / unlock\`**
> <:question:795426662363430953> Description: Disables / Enables everyone from sending messages in specific channel.

> <:hashtagandro:795426662216892436> **\`${prefix}show / hide\`**
> <:question:795426662363430953> Description: Disables / Enables everyone from seeing a specific channel.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v1.2\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
  `)
    .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setTimestamp()
  .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help Music | Help

  if (message.content.toLowerCase() === prefix + "help music") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle('<:music:806928505236750426>** | Music Commands**')
    .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
      .setColor("#d1afd2")
      .setDescription(`
\`Note: Spotify is not supported at the moment❗\`

> <:hashtagandro:795426662216892436> **\`${prefix}play\`**
> <:question:795426662363430953> Description: Plays a song.

> <:hashtagandro:795426662216892436> **\`${prefix}stop\`**
> <:question:795426662363430953> Description: Stops the queue.

> <:hashtagandro:795426662216892436> **\`${prefix}loop\`**
> <:question:795426662363430953> Description: Loops the song/queue.

> <:hashtagandro:795426662216892436> **\`${prefix}queue\`**
> <:question:795426662363430953> Description: Shows you the current queue.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v1.2\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
  `)
    .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setTimestamp()
  .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help fun | Help

  if (message.content.toLowerCase() === prefix + "help fun") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle('<:rocket:795426662408912947>** | Fun Commands**')
    .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
      .setColor("#d1afd2")
      .setDescription(`
> <:hashtagandro:795426662216892436> **\`${prefix}cuttweet\`**
> <:question:795426662363430953> Description: Gives you random questions to answer.

> <:hashtagandro:795426662216892436> **\`${prefix}imposter\`**
> <:question:795426662363430953> Description: Imposter image on a member's name.

> <:hashtagandro:795426662216892436> **\`${prefix}trash\`**
> <:question:795426662363430953> Description: Trash effect on someone's avatar.

> <:hashtagandro:795426662216892436> **\`${prefix}delete\`**
> <:question:795426662363430953> Description: Delete effect on someone's avatar.

> <:hashtagandro:795426662216892436> **\`${prefix}wasted\`**
> <:question:795426662363430953> Description: Wasted effect on someone's avatar.

> <:hashtagandro:795426662216892436> **\`${prefix}iq\`**
> <:question:795426662363430953> Description: Gets someone's IQ.

> <:hashtagandro:795426662216892436> **\`${prefix}clap\`**
> <:question:795426662363430953> Description: Clap for a member.

> <:hashtagandro:795426662216892436> **\`${prefix}slap\`**
> <:question:795426662363430953> Description: Slap a member.

> <:hashtagandro:795426662216892436> **\`${prefix}hug\`**
> <:question:795426662363430953> Description: Hug a member.

> <:hashtagandro:795426662216892436> **\`${prefix}spin\`**
> <:question:795426662363430953> Description: Spin the fruits.

> <:hashtagandro:795426662216892436> **\`${prefix}dice\`**
> <:question:795426662363430953> Description: Roll a dice.

  <:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
  <:boost:801332804524179457> **Bot version: **\`v1.2\`
  <:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
  <:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
  <:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
  `)
    .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setTimestamp()
  .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help ticket | Help

  if (message.content.toLowerCase() === prefix + "help ticket") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
	.setTitle('<:maintenance:795426662350192643>** | Ticket Commands**')
  .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
    .setColor("#d1afd2")
    .setDescription(`
\`If you are a server owner you need to create **Support Team** Role like this excatly to enable the Ticket commands.\`

> <:hashtagandro:795426662216892436> **\`${prefix}new\`**
> <:question:795426662363430953> Description: Create a new ticket.

> <:hashtagandro:795426662216892436> **\`${prefix}close\`**
> <:question:795426662363430953> Description: Closes a ticket.

<:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
<:boost:801332804524179457> **Bot version: **\`v1.2\`
<:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
<:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
<:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
`)
  .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$help giveaway | Help

  if (message.content.toLowerCase() === prefix + "help giveaway") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle('<:Partypopperandro:795426662590185492>** | Giveaway Commands**')
    .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
      .setColor("#d1afd2")
      .setDescription(`
  > <:hashtagandro:795426662216892436> **\`${prefix}gstart [winners] [time] [prize]\`**
  > <:question:795426662363430953> Description: Starts a giveaway.

  <:hashtagandro:795426662216892436> **Bot prefix is \`${prefix}\`**
  <:boost:801332804524179457> **Bot version: **\`v1.2\`
  <:profileandro:795426662988251186> **The developer: \`Zyad#1947\` ${prefix}dev for more information.**
  <:internet:801183982418919454> **[Our Website](https://androbot.xyz)**
  <:maintenance:795426662350192643> **[Our Support server](https://discord.gg/9rQCg5mUby)**
  `)
    .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setTimestamp()
  .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
 message.channel.send(Embed);
  }

});

////////////////Fun

const cutar = [
  'كت تويت | الجملة التي تود أن يسمعها الجميع منك؟',
  'كت تويت | كلمة لشخص تغيّر عليك دون أي سبب؟',
  'كت تويت | إيموجي يعبّر عن مزاجك الحالي؟',
  'كت تويت | أكثر شيء تتميز فيه عن الآخرين؟',
  'كت تويت | هل جربت مرة أن تتصنع صفة ليست فيك؟ وهل نجحت في ذلك؟',
  'كت تويت | شعورك الحالي في كلمة؟',
  'كت تويت | ما هو الشيء الذي لا يستطيع قلبك مقاومته؟',
  'كت تويت |  أمر تحبه لمْ تقم به منذ فترة؟',
  'كت تويت | كلمة غريبة من لهجتك ومعناها؟',
  'كت تويت |  من أجمل الصفات التي يُمكن أن تتواجد في شخص برأيك؟',
  'كت تويت | فترة من عمرك تشتاق لها؟',
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت | ماذا تفعل عندما يطيل أحدهم النظر اليك؟👀',
  'كت تويت | هل تعتبر نفسك شخص مبادر؟',
  'كت تويت | فيلم شاهدته وتمنيت أن تعيش أحداثه؟',
  'كت تويت | شيء جميل بأول حرف من اسمك؟',
  'كت تويت | عندك موهبة معينة؟',
  'كت تويت | تخيّل شيء قد يحدث في المستقبل؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  'كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
  'كت تويت | ماذا ستكتب لنا لتعبر عن حياتك التي عشتها الى الآن في كلمات قليلة؟',
  'كت تويت | هل حدث وشعرت بالوحدة رغم وجود الجميع مِن حولك؟',
  'كت تويت |  تُحبه لكن لا تثق بكلامه، كيف تتصرف؟',
  'كت تويت | كلمة قيلت لك وأثرت فيك سواء بشكل إيجابي أو سلبي ولم تنساها لليوم؟',
  'كت تويت | شيء أساسي لا يمكنك الأستغناء عنه في كل عيد؟',
  'كت تويت | شيء يشغل بالك في الوقت الحالي؟',
  'كت تويت | بماذا تبدأ يومك ؟'
]

const cuten = [
  'Cuttweet | Do you like pets? Do you have any?',
  'Cuttweet | What was the last book you read?',
  'Cuttweet | Do you like to cook?',
  'Cuttweet | If you could choose a place anywhere in the world to live for a year, where would it be?',
  'Cuttweet | If you could you try any kind of activity, what activity would you try?',
  'Cuttweet | What super-power would you most like to have, and why?',
  'Cuttweet | If you had $5 million to spend in 5 days, but you could not spend any of it on yourself or your family, what would you do with it?',
  'Cuttweet | Have you ever lived in another country?',
  'Cuttweet | Have you ever met a famous person?',
  'Cuttweet | What do you do in your free time?',
  'Cuttweet | What kind of food do you prefer eating when you eat out?',
  'Cuttweet | What kind of people do you like?',
  'Cuttweet | What languages do you know how to speak?',
  'Cuttweet | What was the last movie you have seen?',
  'Cuttweet | What would your dream house be like?',
  'Cuttweet | If you could change something about the world, what would it be & why?',
  'Cuttweet | When was the last time you laughed so hard you cried?',
  'Cuttweet | What do you prefer – spontaneity or stability?',
  'Cuttweet | Do you love kids?',
  'Cuttweet | Tell me about a favorite event of your adulthood/childhood.',
  'Cuttweet | What are your hobbies or special interests?'
]

client.on("message", message => {//$cuttweet | Fun
  if (message.content.toLowerCase() === prefix + "cuttweet") {
    if (message.author.bot) return;
const Embed = new Discord.MessageEmbed()
.setTitle("**<:question:795426662363430953> Choose Cuttweet language:**")
.setColor("#d1afd2")
.setDescription(`
\`Note: Cuttweet is random questions that you need to answer them.\`

:flag_sa: **Arabic cuttweet:** \`$cut ar\`

:flag_us: **English cuttweet:** \`$cut en\`
  `)

message.channel.send(Embed);
  }
});

client.on("message", message => {//$cut en | Fun
if (message.content.toLowerCase() === prefix + "cut en") {
  if (message.author.bot) return;
  const Embed = new Discord.MessageEmbed()
  .setTitle(`**<:question:795426662363430953> ${cuten[Math.floor(Math.random() * cuten.length)]}**`)
  .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setColor("#d1afd2")
  message.channel.send(Embed);

}
});

client.on("message", message => {//$cut ar | Fun
if (message.content.toLowerCase() === prefix + "cut ar") {
  if (message.author.bot) return;
  const Embed = new Discord.MessageEmbed()
  .setTitle(`**${cutar[Math.floor(Math.random() * cutar.length)]} <:question:795426662363430953>**`)
  .setImage("https://cdn.discordapp.com/attachments/573642065024385036/826893403274346506/bar.png")
  .setColor("#d1afd2")
  message.channel.send(Embed);

}
});

const huggif = [
  'https://media1.giphy.com/media/TIG6XFVuOriidsTsdu/giphy.gif',
  'https://media1.giphy.com/media/26xBFT1F9BgskEvTO/giphy.gif',
  'https://media3.giphy.com/media/zMmcyhHu5Fol2/giphy.gif'
]

client.on("message", message => { //$hug | Fun

   if (message.content.toLowerCase().startsWith(prefix + "hug")) {
     if (message.author.bot) return;
      if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only!** :no_entry:');
    var messagehug = message.mentions.members.first()

    if(!message.mentions.members.first()) return message.channel.send(`:no_entry: **Please mention someone** :no_entry:`);
    const hug = huggif[Math.floor(Math.random() * huggif.length)];
    var Embed = new Discord.MessageEmbed()
     .setTitle('Hug!')
         .setDescription(`${message.author} Hugged ${messagehug} :heart:`)
     .setImage(`${hug}`)
     .setColor("#d1afd2")
     message.channel.send(Embed);
}
});

const slapgif = [
  'https://media1.giphy.com/media/uqSU9IEYEKAbS/giphy.gif',
  'https://media4.giphy.com/media/lX03hULhgCYQ8/giphy.gif',
  'https://media1.giphy.com/media/P1EomtpqQW34c/giphy.gif',
  'https://media2.giphy.com/media/UbzayP2FNPWbm/giphy.gif'
]

 client.on("message", message => { //$slap | Fun

    if (message.content.toLowerCase().startsWith(prefix + "slap")) {
			if (message.author.bot) return;
       if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only** :no_entry:');
     var messageslap = message.mentions.members.first()
     if(!message.mentions.members.first()) return message.channel.send(`:no_entry: **Please mention someone** :no_entry:`);
     const slap = slapgif[Math.floor(Math.random() * slapgif.length)];
     var Embed = new Discord.MessageEmbed()
      .setTitle('Slap!')
	    .setDescription(`${message.author} Slapped ${messageslap} 😂`)
      .setImage(`${slap}`)

      .setColor("#d1afd2")
      message.channel.send(Embed);
}

});

const clapgif = [
  'https://media4.giphy.com/media/l3q2XhfQ8oCkm1Ts4/giphy.gif',
  'https://media3.giphy.com/media/ZEpmBRpuFlWwhiZ9Cu/giphy.gif',
  'https://media4.giphy.com/media/QTAVEex4ANH1pcdg16/giphy.gif'
]

client.on("message", message => { //$clap | Fun

   if (message.content.toLowerCase().startsWith(prefix + "clap")) {
     if (message.author.bot) return;
      if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only** :no_entry:');
    var messageclap = message.mentions.members.first()
    if(!message.mentions.members.first()) return message.channel.send(`:no_entry: **Please mention someone** :no_entry:`);
    const clap = clapgif[Math.floor(Math.random() * clapgif.length)];
    var Embed = new Discord.MessageEmbed()
     .setTitle('Clap!')
     .setDescription(`${message.author} clapped for ${messageclap} :clap:`)
     .setImage(`${clap}`)
     .setColor("#d1afd2")
     message.channel.send(Embed);
}

});




client.on('message', message => {//$wasted | Fun
  if (message.content.toLowerCase().startsWith(prefix + "wasted")) {
    if (message.author.bot) return;
    const user= message.mentions.users.first()||message.author
const Embed = new Discord.MessageEmbed()
.setTitle(`:boom: **WASTED!** :boom:`)
.setImage(`https://some-random-api.ml/canvas/wasted/?avatar=${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
.setColor("#d1afd2")
message.channel.send(Embed);
  }
});

client.on('message', message => {//$imposter | Fun
  if (message.content.toLowerCase().startsWith(prefix + "imposter")) {
    if (message.author.bot) return;
    const user= message.mentions.users.first()||message.author
const Embed = new Discord.MessageEmbed()
.setTitle(`:knife: **IMPOSTER!** :knife:`)
.setImage(`https://vacefron.nl/api/ejected?name=${user.username}&imposter=true&crewmate=red`)
.setColor("#d1afd2")
message.channel.send(Embed);
  }
});

client.on("message", async message => {//$delete | Fun
    if (message.content.toLowerCase().startsWith(prefix + "delete")) {
              let user = message.mentions.users.first();
              if(!user) return message.channel.send(":no_entry: **You need to mention someone.** :no_entry:")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Delete.png");;
        message.channel.send(attach)
    }
});

client.on("message", async message => {//$trash | Fun
  if (message.content.toLowerCase().startsWith(prefix + "trash")) {
            let user = message.mentions.users.first();
            if(!user) return message.channel.send(":no_entry: **You need to mention someone.** :no_entry:")
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Trash().getImage(`${avatar2}`);
      let attach = new Discord.MessageAttachment(img, "Delete.png");;
      message.channel.send(attach)
  }
});

client.on("message", message => { //$iq | Fun

  if (message.content.toLowerCase().startsWith(prefix + "iq")) {
    if (message.author.bot) return;
     if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only** :no_entry:');
   var messageiq = message.mentions.members.first() || message.author
   const iq = Math.floor(Math.random() * 100) + 1 ;

   var messageembed = new Discord.MessageEmbed()
    .setTitle('IQ Test! :brain:')
    .setDescription(`${messageiq} IQ Level is \`${iq}%\` 🧠`)
    .setColor("#d1afd2")
    message.channel.send(messageembed);

}

});

client.on('message', message => {//$dice | Fun

  if(message.content.toLowerCase() === prefix + "dice") {
	  var dice =["1🎲","2🎲","3🎲","4🎲","5🎲","6🎲","7🎲","8🎲","9🎲","10🎲"]
			if (message.author.bot) return;
       if (!message.channel.guild) return message.channel.send(':no_entry: **This command is for servers only!** :no_entry:');
   var Embed = new Discord.MessageEmbed()
  .setTitle('Dice Roll!')
  .setThumbnail(message.author.displayAvatarURL())
  .setDescription(dice[Math.floor(Math.random() * dice.length)])
   .setColor('#d1afd2')
  message.channel.send(Embed);
  }

  });

client.on('message', message => {//$spin | Fun

    if (message.content.toLowerCase() === prefix + "spin") {
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
		message.channel.send(Embed);
    }

});

////////////////Member

client.on("message", message => {//$short | General
  if (message.content.toLowerCase().startsWith(prefix + "short")) {
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
  if(message.content.toLowerCase().startsWith(prefix + "invites")){
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
                  message.channel.send(Embed);
          }
      )
  }
});

client.on('message', message => {//$inv | General

  if (message.content.toLowerCase() === prefix + "inv") {
	  if (message.author.bot) return;
    const Embed = new Discord.MessageEmbed()
     .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
    .setTitle('**AndroBot Links:**')
    .setColor("#d1afd2")
    .setDescription(`<:hashtagandro:795426662216892436> **[AndroBot Invite](https://androbot.xyz/invite)**

<:question:795426662363430953> **[AndroBot Support](https://discord.gg/9rQCg5mUby)**

<:internet:801183982418919454> **[AndroBot Website](https://androbot.xyz)**
      `)
 message.channel.send(Embed);
  }

});

client.on('message', message => {//$dev | General

if(message.content.toLowerCase() === prefix  + "dev") {
	if (message.author.bot) return;

 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail("https://cdn.discordapp.com/avatars/361855205664489475/4a6a156e6a82faa8762256d486f28957.png?size=1024")
 .setTitle('**AndroBot Developer:**')
 .addField('<:crown:801332804674912266>** Name:**',`Zyad`,true)
 .addField('<:ruleandro:795426662984581160>** Age:**',`14`,true)
  .addField('<:internet:801183982418919454>** Country:**',`Saudi Arabia`,false)
  .addField('<:cake:841093345445937154>** Birthday:**',`NOV, 11`,true)
 .addField('<:twitter:795426662409175070>** Social:**',`[Twitter](https://twitter.com/AZy4d)`,true)
 message.channel.send(Embed);
}
});

client.on("message", message =>{//$avatar, $avatar server | General

if(message.content.toLowerCase() === prefix + "avatar server"){
	if (message.author.bot) return;
    let dis = new Discord.MessageEmbed()
    .setColor('#d1afd2')
    .setAuthor(message.guild.name, message.guild.iconURL({ format: 'png', dynamic: true}))
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTimestamp()
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(dis)

} else if(message.content.toLowerCase().startsWith(prefix + "avatar")){
	if (message.author.bot) return;
let user = message.mentions.users.first() || message.author;
let dis2 = new Discord.MessageEmbed()
.setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
.setTitle("Avatar Link")
.setColor('#d1afd2')
.setURL(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setTimestamp()
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
return message.channel.send(dis2)

}
});

  client.on('message', message => {//$user | General
    if(message.content.toLowerCase().startsWith (prefix + "user")) {
        if (message.author.bot) return;
      let user = message.mentions.users.first() || message.author
     let Embed = new Discord.MessageEmbed()
     .setColor("#d1afd2")
       .setAuthor(user.username,user.displayAvatarURL())
     .setThumbnail(user.displayAvatarURL())
     .setTitle(`**User Data:**`)
     .addField('<:general:801172797760995358>** Username:**',`${user.tag}`,false)
     .addField('<:hashtagandro:795426662216892436>** ID:**',`${user.id}`,false)
     .addField('<:ruleandro:795426662984581160>** Created At:**',`${user.createdAt.toLocaleString()}`,false)
     message.channel.send(Embed);
   }
    });


client.on('message', message => {//$bot | General

if(message.content.toLowerCase() === (prefix + "bot")) {
	if (message.author.bot) return;
 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail("https://cdn.discordapp.com/attachments/573642065024385036/818084048843833344/circlelogo1.png")
  .setTitle(`**AndroBot version: v1.2**`)
 .setDescription("Hi! I'm Androbot a multi-purpose bot ready to skill up and boost up your Discord server also features auto-moderation, administration, and much more")
 .addField('<:hashtagandro:795426662216892436>** latency:**',`${Math.round(client.ws.ping)}ms`,true)
 .addField('<:sparklesandro:795426662757695528>** Guilds:**',`${client.guilds.cache.size}`,true)
 .addField('<:general:801172797760995358>** Users:**',`${client.users.cache.size}`,true)
 .addField('**<:profileandro:795426662988251186> Bot Developer:**',`[Zyad](https://twitter.com/AZy4d)`,true)
 .addField('**<:internet:801183982418919454> Bot Website:**',`[Website](https://androbot.xyz/)`,true)
 .addField('**<:question:795426662363430953> Bot Support:**',`[Support Server](https://discord.gg/9rQCg5mUby)`,true)
 .addField('**<:rocket:795426662408912947> Invite AndroBot:**',`[Invite](https://androbot.xyz/invite)`,true)
 message.channel.send(Embed);
}

});

client.on('message', message => {//$server | General

if(message.content.toLowerCase() === (prefix  + "server")) {
	if (message.author.bot) return;
 let Embed = new Discord.MessageEmbed()
 .setColor("#d1afd2")
 .setThumbnail(message.guild.iconURL())
 .setTitle(`**${message.guild.name} Data:**`)
 .addField('<:internet:801183982418919454>** Server region:**',`${message.guild.region}`,true)
  .addField('<:rocket:795426662408912947>** Roles:**',`${message.guild.roles.cache.size}`,true)
 .addField('<:general:801172797760995358>** Members:**',`${message.guild.memberCount}`,true)
 .addField('<:hashtagandro:795426662216892436>** Text channels:**',`${message.guild.channels.cache.filter(m => m.type === 'text').size}`,true)
 .addField('<:sparklesandro:795426662757695528>:** Voice channels:**',`${message.guild.channels.cache.filter(m => m.type === 'voice').size}`,true)
 .addField('<:crown:801332804674912266>** Server owner:**',`${message.guild.owner}`,true)
 .addField('<:ruleandro:795426662984581160>** Created On:**',`${message.guild.createdAt.toLocaleString()}`,true)
 .addField('<:boost:801332804524179457>** Server Boosts:**',`${message.guild.premiumSubscriptionCount}`,true)
 message.channel.send(Embed);
}

});

client.on('message', message => {//$roles | General

  if (message.content.toLowerCase().startsWith(prefix + "roles")) {
	  if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply(':no_entry: I do not have the Permission to do this action. **MANAGE_ROLES** :no_entry:')
      const Rank = message.guild.roles.cache.map(e => e.toString()).join("\n");

      let Embed = new Discord.MessageEmbed()
          .setTitle(`**${message.guild.name} Roles :**`)
		  .setThumbnail(message.guild.iconURL())
          .setColor("#d1afd2")
          .setDescription(Rank)
      message.channel.send(Embed)
  }

});

client.on('message', message => {//$emojis | General

  if (message.content.toLowerCase() === (prefix + "emojis")) {
	  if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **MANAGE_EMOJIS** :no_entry:')
      const emojis = message.guild.emojis.cache.map(e => e.toString()).join(" ");

      let Embed = new Discord.MessageEmbed()
          .setTitle(`**${message.guild.name} Emojis :**`)
		  .setThumbnail(message.guild.iconURL())
          .setColor("#d1afd2")
          .setDescription(emojis)
      message.channel.send(Embed)
  }

});

////////////////Admin

client.on("message", message => {//$vote | Admin
  if (message.content.toLowerCase().startsWith(prefix + "vote")) {
    if (message.author.bot) return;
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You do not have the Permission to do this action. **MANAGE_GUILD** :no_entry:`);
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(":no_entry:** Usage: $vote [vote subject] **:no_entry:")
message.delete()
 let Embed = new Discord.MessageEmbed()

.setThumbnail(message.author.displayAvatarURL())
.setDescription(`**${args || !args}**`)
 .setColor("#d1afd2")
 .setFooter(`Vote by: ${message.author.tag} | React with 👍 OR 👎`, message.author.displayAvatarURL())

message.channel.send(Embed).then(m => {
m.react("👍");
m.react("👎");
})
}
});

client.on("message", message => {//$setnick | Admin
  if (message.content.toLowerCase().startsWith(prefix + "setnick")) {
    if (message.author.bot) return;
    if(!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **MANAGE_NICKNAMES** :no_entry:')
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`:no_entry: You do not have the Permission to do this action. **MANAGE_NICKNAMES** :no_entry:`);
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args) return message.channel.send(`:no_entry:** Usage: $setnick [member] [nickname] **:no_entry:`);
    let userrole = message.guild.member(user).roles.highest;
       let merole = message.guild.me.roles.highest;
       if (userrole.position > merole.position) {
         return message.channel.send(`:no_entry: **I couldn't change nick for that user. Please check my permissions and role position.** :no_entry:`);
       }
       if (!nick) return message.channel.send(`✅ **${user} nickname has been reset.**`);
    message.guild.member(user.user).setNickname(`${nick}`);
    message.channel.send(`✅ **${user}** nickname changed to ${nick}.`);
  }
});


client.on('message', async message => {//$vkick | Admin
  if(message.content.toLowerCase().startsWith(prefix + "vkick")){
    if(!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **MOVE_MEMBERS** :no_entry:')
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`:no_entry: You do not have the Permission to do this action. **MOVE_MEMBERS** :no_entry:`);
              if (!message.channel.guild) return message.channel.send(':no_entry: This command is only for servers! :no_entry:');

 let user = message.guild.member(
  message.mentions.users.first())

        if(!user) return message.channel.send(`:no_entry: ** Usage: ${prefix}vkick [member] ** :no_entry:`)
         if (!message.guild.member(user).voice.channel) return message.channel.send(":no_entry:** This member is not in a voice channel! **:no_entry:")
    await user.voice.kick()
    message.channel.send(`✅ **${user} has been voice kicked.**`)
  }

});

client.on('message', async message => {//$mute | Admin
  if(message.content.toLowerCase().startsWith(prefix + 'mute')) {
    if (message.author.bot) return;
    if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **ADMINISTRATOR** :no_entry:')
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
  .setFooter('Id ' + message.author.id, message.author.displayAvatarURL())
  member.send(Embed);
  }
  });

client.on('message', async message => {//$unmute | Admin
if(message.content.toLowerCase().startsWith(prefix + 'unmute')) {
  if (message.author.bot) return;
  if(!message.guild.me.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **ADMINISTRATOR** :no_entry:')
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
.setFooter('Id ' + message.author.id, message.author.displayAvatarURL())
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
  if (message.content.toLowerCase().startsWith (prefix + "unban")) {
    if (message.content.toLowerCase() === (prefix + "unban all")) return;
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

  if (message.content.toLowerCase() === prefix + "bans") {
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
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
   message.channel.send(Embed)
    .catch(console.error)

    })
}
});

client.on('message', message =>{//$ban | Admin

if(message.content.toLowerCase().startsWith(prefix + "ban")){
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

  if(message.content.toLowerCase().startsWith(prefix + "kick")){
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

  if (command.toLowerCase() === "say") {
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
  if (command.toLowerCase() == "embed") {
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

    if (message.content.toLowerCase() === prefix + "lock") {
			   if (message.author.bot) return;
                        if(!message.channel.guild) return  message.channel.send(':no_entry: This command is only for servers! :no_entry:');
	  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(':no_entry: I do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:')
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send(':no_entry: You do not have the Permission to do this action. **MANAGE_CHANNELS** :no_entry:');
           message.channel.updateOverwrite(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
                message.channel.send(`🔒** <#${message.channel.id}> has been locked.**`)
           });
             }
if (message.content.toLowerCase() === prefix + "unlock") {
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

    if (message.content.toLowerCase() === prefix + "show") {
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
if (message.content.toLowerCase() === prefix + "hide") {
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
  if(message.content.toLowerCase() === prefix + "play") {
    message.channel.send(":no_entry:** You didn't gave me something to play! **:no_entry:")
  }
});


const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  if (command.toLowerCase() == "play"){
 distube.play(message, args.join(" "));
  }

  if (command.toLowerCase() == "loop") {
    let mode = distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "Loop queue" : "Loop song" : "Off";
    message.channel.send(":white_check_mark: **Loop mode has been set to `" + mode + "`**");
}

  if (command.toLowerCase() == "stop") {
      distube.stop(message);
      message.channel.send(":white_check_mark: **Music has been stopped.**");
  }

  if (command.toLowerCase() == "skip") {
    distube.skip(message);
    message.channel.send(":white_check_mark: **Music has been skipped.**")
  }


  if (command.toLowerCase() == "queue") {
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
  });

////////////////Other

client.on("message", message => {//$!servers | Other

  if (message.content.toLowerCase().startsWith(prefix + "!servers")) {
    if (message.author.bot) return;
    if (message.author.id !== "361855205664489475" && message.author.id !== "518020270389198848") {
      message.channel.send(
        `:no_entry: **Sorry ${message.author.username} You Can't Use This Command!** :no_entry:`
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

client.on("message", message => {//$!des | Other
  if (message.content.toLowerCase().startsWith(prefix + "!des")) {
    if (message.author.bot) return;
    if (message.author.id !== "361855205664489475") {
      message.channel.send(
        `:no_entry: **Sorry ${message.author.username} You Can't Use This Command!** :no_entry:`
      );
    } else {      message.reply("Destroying...");
          message.reply("..");
          client.channels.cache.get("801476479245456380095026")
          .send(new Discord.MessageEmbed()
          .setAuthor(client.user.username,client.user.displayAvatarURL())
          .setColor("RED")
          .setDescription(`::!`))}

}
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === prefix + "!check") {
    if (message.author.id !== "361855205664489475") {
      message.channel.send(
        `:no_entry: **Sorry ${message.author.username} You Can't Use This Command!** :no_entry:`
      );
    } else { message.reply("Im online!");
}
  }
});

client.on('message', message =>{//suggestions | Other
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
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("#d1afd2")
  .setDescription(`From: <@${message.author.id}>
  **Suggestion: ${suggestion}**`)
  .setTimestamp()
  .setFooter(`Suggestion by: ${message.author.tag}`, message.author.displayAvatarURL());
  message.channel.send(Embed).then(embedMessage => {
    embedMessage.react(client.emojis.cache.get("795426662103384085"))
    embedMessage.react(client.emojis.cache.get("795426662069305366"))
  })

     }
});

client.on('guildCreate', guild => {//new server | Other
        client.channels.cache.get("801476479380095026")
        .send(new Discord.MessageEmbed()
        .setAuthor(client.user.username,client.user.displayAvatarURL())
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
        .setAuthor(client.user.username,client.user.displayAvatarURL())
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
  if (cmd.toLowerCase() == prefix + "gstart") {
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
      message.channel.awaitMessages(response => response.content.toLowerCase() === '$close', {
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
