
const Discord = require('discord.js');



const config = require('./config.json');
const clientbot = new Discord.Client();

const prefix = config.prefix;

clientbot.login(config.token);

clientbot.on('message', msg=>{

    let magic8ans = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don\'t count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    let cmdArgs = msg.content.substring(prefix.length).split(" ");

    switch(cmdArgs[0]) {
        case 'ping':
            msg.reply('Pong!');
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

        case 'm8':
            if (!cmdArgs[1]){
                msg.channel.send("Please ask a question")
            }
            else{
                var replyNum = Math.floor(Math.random() * magic8ans.length);
                msg.reply(magic8ans[replyNum]);
            }
        break;

        case 'dice':
            if (!cmdArgs[1]){
                var diceRoll = Math.floor(Math.random() * 6) + 1;
                msg.reply("Rolled a "+diceRoll + "!");

            }
        break;
    }
});


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!')

})