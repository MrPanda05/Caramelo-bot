module.exports = {
	name: 'prune',
	description: 'Deleta mensagem de corno.',
	guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
		if(!message.member.roles.cache.has('782806503719043132'))
			return message.reply('você não tem cargo para executar essa comando!');

		if (isNaN(amount)) {
			return message.reply('poem um numero valido!');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('você prescisar por um número entre 1 e 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Bruh... Bugo aki! Não da pra apagar.');
		});
	},
};