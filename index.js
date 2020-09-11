const Discord = require("discord.js");
const config = require("./config");

const client = new Discord.Client();

const prefix = "!" + config.PREFIX;

client.on("message", function (message) {
  msg = message.content.split(' ');

  if (message.author.bot) return;

  if (msg[0] !== prefix) return;

  if (msg[0] === prefix) {
    if (msg[1] === "help") {
      message.reply("Here is a list of commands starting with the help command itself.");
      return;
    }
    if (msg[1] === "about") {
      message.reply("Auto Bot is meant to automate a lot of repetative tasks. If you find yourself doing some repetitive tasks which is not done by Auto Bot, open an issue on it's GitHub (https://github.com/ayushmxn/auto-bot/issues). Note: This bot is currently under development, hence, one cannot directly add this bot to a server.");
      return;
    }
    else {
      message.reply("It seems you may have given an invalid command. You may refer to the examples in the usage section (https://github.com/ayushmxn/auto-bot/blob/master/README.md).");
      return;
    }
  }

});

client.login(config.BOT_TOKEN);