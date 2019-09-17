
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
                break;
            }
            var kickee = msg.mentions.users.first();
            if (!kickee){
                msg.channel.send("Invalid user specified")
            }
            else{
                var kickeeMem = msg.guild.member(kickee);
                if (kickeeMem){
                    kickeeMem.kick("");
                    msg.reply(`Kicked ${kickee.tag}`);
                }
            }
        break;

    }
});


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!')

})