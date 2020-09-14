module.exports = {
	name: 'server',
	description: 'Informações do server.',
	execute(message) {
		message.channel.send(`Nome do server: ${message.guild.name}\nQuantidades de membors: ${message.guild.memberCount}`);
	},
};