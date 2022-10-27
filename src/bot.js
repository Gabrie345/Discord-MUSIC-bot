
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Discord.Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
});
const { token } = process.env;
const prefix = "#";
videosDoPedroGois=[
  "https://www.tiktok.com/@ph_gois/video/7153262525151333638?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7152691293053783302?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7136727479598796037?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7101703076230221062?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7068460467034852614?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7063645690819267845?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7059921180714716422?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7033208338443767045?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7028286655475879173?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7024915152604548358?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7021232557928779013?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7021207962345590021?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7019094627764407558?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7019088252699233542?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7019082985957756165?is_copy_url=1&is_from_webapp=v",
  "https://www.tiktok.com/@ph_gois/video/7013347010136886534?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7013176110359825670?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7013143642801999110?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7013135053492325638?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7013128807582354693?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7013125100560043269?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7011888444938947845?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7011883854285802758?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7011881021993979141?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7010263161345494278?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7006332579372600582?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7005735319244999942?is_copy_url=1&is_from_webapp=v1",
  "https://www.tiktok.com/@ph_gois/video/7004228332875336966?is_copy_url=1&is_from_webapp=v1", 
]
function getRandomArbitrary(min, max) {
  result = Math.random() * (max - min) + min;
  return Math.round(result);
}
client.login(token);

client.on("ready", () => {
  console.log("Bot is ready!!!");
});

client.on("messageCreate", (msg) => {
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return; 
  if (msg.content == prefix + "Pedro Gois") {
    result = getRandomArbitrary(0, 27)
    msg.reply({ 
      content: videosDoPedroGois[1],
    });
  }

})
