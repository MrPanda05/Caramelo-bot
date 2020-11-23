const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	aliases: ['pog', 'poggers'],
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
		.setImage('https://imgur.com/9kJnbGE.png')
		.setColor('#0099ff')
		.setTitle('Poggers moment')
		.setAuthor('Poggers!')
		.setURL('https://imgur.com/a/oEbwixp')
		
	message.channel.send(exampleEmbed);
	}
};
		
		