module.exports = {
	name: 'reload',
	description: 'Atualiza comandos',
	args: true,
	aliases: ['r'],
	execute(message, args) {
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`Não tem comando com esse nome ou prefixo \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`As definições de \`${command.name}\` foram atualizadas!`);
		} catch (error) {
			console.log(error);
			message.channel.send(`MANO... o F5 quebro, não da pra atualiza \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};