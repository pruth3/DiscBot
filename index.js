/*{
	"prefix": "!",
	"token": "your-token-goes-here"
}*/


const Discord = require('discord.js');
const clientbot = new Discord.Client();

const token = 'insert token here';
clientbot.login(token);

clientbot.on('message', msg=>{
    if (msg.content ===  "cmd"){
        msg.reply('cmd test confirmed!');
    }
})


clientbot.on('ready', ()=>{
    console.log('Gwatch Bot is ready to go!')

})