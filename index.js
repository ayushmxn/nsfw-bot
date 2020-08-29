const Discord = require("discord.js");
const config = require("./config");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function (message) {1
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const arguments = commandBody.split(' ');
  const command = arguments.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);