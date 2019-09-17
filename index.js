
const Discord = require('discord.js');

const config = require('./config.json');
const clientbot = new Discord.Client();

clientbot.login(config.token);

clientbot.on('message', msg=>{
    if (msg.content ===  "cmd"){
        msg.reply('cmd test confirmed!');
    }
})


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!')

})