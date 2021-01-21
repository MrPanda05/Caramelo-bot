const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Mosta o avatar dos meliantes.',
	aliases: ['icon', 'pfp'],
	dev: true,
	execute(message) {
		const avatarSolo = new Discord.MessageEmbed()
			.setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setColor('RANDOM');
		
		if (!message.mentions.users.size) {
			return message.channel.send(avatarSolo);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.displayAvatarURL({format: "png", dynamic: true })}`;
		});

		const avatarTag = new Discord.MessageEmbed()
			.setImage(`${avatarList}`)
			.setColor('RAMDOM');
		message.channel.send(avatarTag);
	}
};

//Só nao funciona se mandar duas tag, mas eu resolvo isso dps