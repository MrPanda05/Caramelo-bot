module.exports = {
	name: 'prune',
	description: 'Deleta mensagem de corno.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Poem um numero valido!');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('Você prescisar por um número entre 1 e 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Bruh... Bugo aki! Não da pra apagar.');
		});
	},
};