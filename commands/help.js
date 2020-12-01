const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Pra ajuda os corno manso!',
	aliases: ['commands'],
	usage: '[Nome do comando]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aqui todos os comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nVocê pode mandar \`${prefix}help [nome do comando]\` para ter uma explicação do comando!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Mandei no teu privado!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('Não consigo te mandar por dm, abre a porra da dm arrombado!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Esse comando não é valido');
		}

		data.push(`**Nome:** ${command.name}`);

		if (command.aliases) data.push(`**Outro prefixo:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descrição:** ${command.description}`);
		if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};