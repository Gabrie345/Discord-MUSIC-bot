
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
const { joinVoiceChannel,createAudioPlayer, createAudioResource} = require('@discordjs/voice');
const videosDoPedroGois = (require('./videosTikTokPedroGois'));
const filosofiaImage = (require('./FilosofiaImage'));

const servidores = {
  'server':{
    connection: null,
    dispatch: null
  }
}


dotenv.config();

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
});
const { token } = process.env;
const prefix = "#";

function getRandomArbitrary(min, max) {
  result = Math.random() * (max - min) + min;
  return Math.round(result);
}
client.login(token);

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", async(msg) => {
  //fitro chat box
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;
  

  if(msg.content == prefix + "Join"){
    servidores.server.connection = 
    joinVoiceChannel({
      channelId: msg.member.voice.channel.id,
      guildId: msg.guild.id,
      adapterCreator: msg.guild.voiceAdapterCreator
    })
  }
  if (msg.content == prefix + "Pedro Gois") {
    result = getRandomArbitrary(0, 27)
    msg.reply({ 
      content: videosDoPedroGois[result],
    });
  }
  if (msg.content == prefix + "Filosofia de boteco") {
    result = getRandomArbitrary(0, 29)
    msg.reply({ 
      content:filosofiaImage[result]
    });
  }
  if (msg.content == prefix + "play") {
    joinVoiceChannel.play('./teste.mp3')
    //servidores.server.connection.play('./teste.mp3')
  }

})
