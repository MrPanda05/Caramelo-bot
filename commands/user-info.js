module.exports = {
	name: 'user-info',
	aliases: ['info'],
	cooldown: 5,
	description: 'Informações sobre você ou qualquer puta',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply(`Nome de puta: ${message.author.username}\nCusto da puta em reais: ${message.author.id}
Tempo de experiencia: ${message.author.createdTimestamp}`);
		}
		const infoUser = message.mentions.users.first();
		
		message.channel.send(`${message.author} quer comprar ${infoUser.username} para ser sua puta :smiling_imp:\nCusto da puta em reais: ${infoUser.id}
Tempo de experiencia: ${infoUser.createdTimestamp}`);
	},
};	