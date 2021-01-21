const Discord = require('discord.js');
module.exports = {
	name: 'user-info',
	aliases: ['info', 'eu'],//por uma parte onde se ele por eu não pode marcar ninguem
	cooldown: 5,
	description: 'Informações sobre você ou alguem!',
	execute(message, args) {
		function getUserFromMention(mention) {
			if (!mention) return;
	   
			if (mention.startsWith('<@') && mention.endsWith('>')) {
				 mention = mention.slice(2, -1);
	   
				 if (mention.startsWith('!')) {
					  mention = mention.slice(1);
				 }
	   
				 return (mention);
			}
	   }
	  const user = getUserFromMention(args[0]);
	   //const id = args[0];
	   const infoSolo = new Discord.MessageEmbed()
			.setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setColor('RANDOM')
			.setTitle(`Informações de ${message.author.username}`)
			.addField(
				{ name: 'id', value: `${message.author.id}`, inline: true},
			);




	   if (!message.mentions.users.size) {
		   return message.channel.send (infoSolo);
	   }



	},
};	