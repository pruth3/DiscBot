
const Discord = require('discord.js');



const config = require('./config.json');
const clientbot = new Discord.Client();

const prefix = config.prefix;

clientbot.login(config.token);

clientbot.on('message', msg=>{

    let cmdArgs = msg.content.substring(prefix.length).split(" ");

    switch(cmdArgs[0]) {
        case 'cmd':
            msg.reply('cmd test confirmed');
        break;

        case 'kick':
            if(!cmdArgs[1]){
                msg.channel.send("No user specified");
            }
        break;

    }
});


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!')

})