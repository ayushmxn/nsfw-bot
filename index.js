const Discord = require("discord.js");
const config = require("./config");

const client = new Discord.Client();

const prefix = config.PREFIX;

client.on("message", function (message) {
  msg = message.content.split(' ');

  if (message.author.bot) return;

  if (msg[0] !== prefix) return;

  if (msg[0] === prefix) {
    if (msg[1] === "help") {
      message.reply("Refer to the documentation (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md). If you find yourself doing repetitive task(s) not covered by the Auto Bot, open an issue on it's Github (https://github.com/ayushmxn/auto-bot/issues).");
      return;
    }
    if (msg[1] === "about") {
      message.reply("Auto Bot is meant to automate a lot of repetative tasks. Note: This bot is currently under development, hence, some extra steps (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md#setup) are required for you to add it to your server.");
      return;
    }
    else {
      message.reply("It seems you may have given an invalid command. Refer to the examples in the usage section (https://github.com/ayushmxn/auto-bot/blob/master/.github/DOCUMENTATION.md#usage).");
      return;
    }
  }

});

client.login(config.BOT_TOKEN);