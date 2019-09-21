
const Discord = require('discord.js');



const config = require('./config.json');
const clientbot = new Discord.Client();

const prefix = config.prefix;

clientbot.login(config.token);

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

clientbot.on('message', msg=>{

    
    let cmdArgs = msg.content.substring(prefix.length).split(" ");

    switch(cmdArgs[0]) {
        case 'FOUR':
            msg.channel.send("https://i.redd.it/km5fbf59tzn31.jpg")
        break;
        
        case 'ping':
            msg.reply('Pong!');
        break;

        case 'hello':
            msg.reply('Hello')
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

        case 'magic8':
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

        case 'randMinMax':
            if (!cmdArgs[1] || !cmdArgs[2] || isNaN(cmdArgs[1]) || isNaN(cmdArgs[2]) || (Number(cmdArgs[1]) > Number(cmdArgs[2]))){
                msg.reply("Usage: !randMinMax <min role number> <max role number>");
            }
            else if (!(cmdArgs[1] % 1 === 0) || !(cmdArgs[2] % 1 === 0)){
                msg.reply("Please use integer values (whole numbers)!");
            }
            else{
                var rngResult = Math.floor(Math.random() * (Number(cmdArgs[2]) - Number(cmdArgs[1]) + 1)) + Number(cmdArgs[1]);
                msg.reply(rngResult);
            }
        break;

        case 'coinflip':
            if (!cmdArgs[1]){
                var flip = Math.floor(Math.random() * 2) + 1;
                var headTails = "";
                if (flip == 1){
                    headTails = "heads";
                }
                else{
                    headTails = "tails";
                }

                msg.reply("You flipped a "+ headTails);

            }
        break;

        case 'wordcount':
            var wordCount = cmdArgs.length - 1;
            msg.reply("Counted "+ wordCount + " word(s).");
        break;

    }
});


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!');

})