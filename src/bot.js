
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
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
  
});
