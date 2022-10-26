
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
});
const { token } = process.env;
const prefix = "#";

client.login(token);

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return; 
  if (msg.content === prefix + "O Gabriel é lindo?") {
    msg.reply({
      content: "SIM!!!!!!",
    });
  }
  if(msg.content === prefix + 'join'){
    console.log(msg.member.voice.channel);
    client.join()
    msg.member.voice.channel.join();
    
    
    
    /*if(msg.member.voice.channel){
      console.log('dentro do if');
      console.log(msg.member.voice.channel.joinable);
      console.log('o pai ta ON !!!');
    }*/
  }

})
