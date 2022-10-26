const { token } = process.env;
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const prefix = "#";

client.login("MTAzNDE2MTM2NDQ1OTA2NTM5NA.GUuaVs.vDMx-_6IIuPma7rKq7Ip0_MPReoKnQG9R8NaDo");

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", (msg) => {
    if (!msg.guild) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.content === prefix + "Hello") {
        msg.reply({
        content: "Is Okay!!",
    });
  }
  if (msg.content === prefix + "O kid é gay ?") {
    msg.reply({
      content: "SIM!!!!!!",
    });
  }
  if(msg.content === '#join'){
    if(msg.member.voiceChannel){
        msg.member.voiceChannel.join()
        msg.channel.send('O Pai ta on');
        console.log('o pai ta ON !!!');
    }else{
        msg.channel.send('Burro você não ta no canal de voz.....');
        console.log('Burro você não ta no canal de voz.....');
    }
});
