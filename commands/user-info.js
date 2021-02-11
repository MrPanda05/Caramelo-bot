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
	 
	   const infoSolo = new Discord.MessageEmbed()
			.setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
			.setColor('RANDOM')
			.setTitle(`${message.author.username}`)
			.addFields(
				{ name: 'tag', value: `${message.author.tag}`},
				{ name: 'id', value: `${message.author.id}`, inline: true},
			);
	        //teste, vo repeti essa mesma syntaxe, pra cria um grande constante no final
			const tagImagem = message.mentions.users.map(user => {
				return `${user.displayAvatarURL({format: "png", dynamic: true })}`;//Imagen do @
			});
			const tagId = message.mentions.users.map(user => {
				return `${user.id}`;// id do @
			});
			const tagTag = message.mentions.users.map(user => {
				return `${user.tag}`;// tag do @
			});
			const tagUsername = message.mentions.users.map(user => {
				return `${user.username}`;// username do @
			});
			
			/*const infoTag = new Discord.MessageEmbed()
				.setImage(`${tagImagem}`)
				.setColor('RANDOM')
				.setTitle(`${tagUsername}`)
				.addFields(
					{ name: 'tag', value: `${tagTag}`},
					{ name: 'id', value: `${tagId}`, inline: true},
				);*/
			//FIM DO CAOS 

			if(!message.mentions.users.size) {
				return message.channel.send(infoSolo), console.log(tagImagem);
			}
		//return message.channel.send(infoTag);
	   
	},
};	