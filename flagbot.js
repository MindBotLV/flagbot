const Discord = require("discord.js");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
	partials: ['CHANNEL', 'MESSAGE']
});

dotenv.config();
var responses = ["I can't read that, try learning the wave library","I cant understand you very well, come back when you have something from the file I might be able to read, like base64","Spamming me won't do much, well, it might give a tiny hint","Go poke around in the file or view it differently, maybe in a spectrogram"];

client.on('ready', () => {
	client.user.setActivity("DM Only");
	console.log ('Logged in as ${H4ck50n}!');
});

client.on('messageCreate', message => {
	
	if(message.channel.type =='DM'&&!message.author.bot){
				
		if(message.content == process.env.HINTREQ){
			message.channel.send(process.env.HINT);
		}else if(message.content == process.env.FLAGASK){
			message.channel.send(process.env.FLAG);
		}else if(Math.random()>0.95){
			message.channel.send(responses[~~(Math.random()*responses.length)]);
		}

	}
});

client.login(process.env.TOKEN);
