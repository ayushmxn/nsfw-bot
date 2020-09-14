# Documentation

## Setup

Rename the ```.env-sample``` to ```.env``` in the project directory and add your unique bot token.   

Read through the [DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js) to get a basic understanding of how Discord bots work.

Read through [Hosting a Discord Bot on Repl.it](https://dev.to/fizal619/so-you-want-to-make-a-discord-bot-4f0n) to understand why we use the ```.env``` file and ```express``` package. 

## Scripts

```npm install``` node dependencies.    

```npm run dev``` to run bot in development mode - automatically restart the bot every time there is a change in it's code (courtesy of [nodemon](https://nodemon.io/))    

```npm start``` to run the bot.

## API and Library References

[Discord.js](https://discord.js.org) library which allows you to interact with the [Discord API](https://discord.com/developers/docs/intro).

## Usage   

Command | Arguments | Description
------- | --------- | --------
help | | Gives a summary of commands used with their description, similar to this table.
about | | A description of the Auto Bot.
