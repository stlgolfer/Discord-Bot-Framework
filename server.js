const Discord = require('discord.js');
const client = new Discord.Client();

const pingcommand = require(__dirname + '/functions/test.js');

const config = null;

try {
	config = require(__dirname + '/config.json');
}
catch (e) {
	throw new Exception("Config file not found");
}

client.on('ready', () => {
	console.log(`${config.botname} is online`);
});

client.on('message', function (msg) {
	switch (msg.content.toLowerCase()) {
		case '/ping' : msg.reply(pingcommand.ping()); break;
		default: break;
	}
});

client.login(config.login);
