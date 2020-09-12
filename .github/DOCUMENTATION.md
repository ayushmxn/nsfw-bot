# Documentation

## Setup

Rename the ```config-sample.json``` to ```config.json``` in the project directory, add the bot token and desired prefix.    

Follow the [DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js) on how to setup a basic bot.

## Scripts

```npm install``` node dependencies.    

```npm run dev``` to run bot in development mode - automatically restart the bot every time there is a change in it's code (courtesy of [nodemon](https://nodemon.io/))    

```npm start``` to run the bot.

## API and Library References

[Discord.js](https://discord.js.org) library which allows you to interact with the [Discord API](https://discord.com/developers/docs/intro).

## Usage

For these examples, let's assume our prefix is set to ```!auto```.    

Command | Arguments | Description
------- | --------- | --------
help | | Gives a summary of commands used with their description, similar to this table.
about | | A description of the Auto Bot.
