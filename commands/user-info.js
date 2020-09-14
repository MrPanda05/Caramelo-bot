module.exports = {
	name: 'user-info',
	description: 'Informações sobre você ou qualquer meliante.',
	execute(message) {
		message.channel.send(`Nome de puta: ${message.author.username}\nNúmero do cartão de crédito: ${message.author.id}`);
	},
};