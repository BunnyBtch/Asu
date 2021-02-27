//const Youtube = require('simple-youtube-api');
//const {OpusEncoder} = require('@discordjs/opus');
const Discord = require('discord.js');
const Util = require('minecraft-server-util');
const fs = require('fs');
const {prefix, token, youtubeKey, MainDC, sv_minecraft} = require('./config.json');

const Client = new Discord.Client;
const Guild = new Discord.Guild;
Client.commands = new Discord.Collection();

// Collections
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(file of commandFile){
    command = require(`./commands/${file}`);
    Client.commands.set(command.name, command);
}

Client.login(token);
Client.once('ready', () => {
    console.log("Ready!")
})

// Commands
Client.on('message', async msg => {
    //Define Commands
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()


    //Special Commands
    if((commandName == 'minecraft' || commandName == 'mc') && (msg.channel.guild == MainDC) ){
        Util.status(sv_minecraft)
        .then((Response) =>{
            msg.channel.send(`
Host: ${Response.host}
Version: ${Response.version}
Description: ${Response.description.descriptionText}
Online Players: ${Response.onlinePlayers}
            `);
        })
        .catch((error) =>{
            throw error;
        });
    }


    //Execute Commands
    if(!Client.commands.has(commandName)) return;
    const command = Client.commands.get(commandName);
    try {command.execute(msg, args);
    }catch(error){
        console.error(error)
        msg.reply('Error!');
    }

})
