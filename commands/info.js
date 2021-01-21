const Discord = require('discord.js');
module.exports = {
	name: 'info',
	aliases: ['userInfo', 'informação', 'Info'],
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (!message.member.has('<@&782806118396198933>')) {
			return message.channel.send('Você não é o Dev pra usar esse comando!');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};