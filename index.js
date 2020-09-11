const Discord = require("discord.js");
const config = require("./config");

const client = new Discord.Client();

const prefix = "!auto";

client.on("message", function (message) {
  console.log(message);
  if (message.author.bot) return;
  msg = message.content.split(' ');

  if (msg[0] !== prefix) return;

  if (msg[0] === prefix) {
    if (msg[1] === 'help') {
      message.reply("Auto Bot is a meant to automate a lot of repetative tasks. This bot is currently under development. If you find yourself doing something over and over again, open an issue (https://github.com/ayushmxn/auto-bot/issues).");
    }
    else {
      message.reply(`Invalid command. Check the documentation (https://github.com/ayushmxn/auto-bot/issues) for valid list of commands.`);
    }
  }

  else {
    message.reply("Invalid command. Look at https://github.com/ayushmxn/auto-bot/blob/master/README.md for how to use different commands.");
  }

});

client.login(config.BOT_TOKEN);