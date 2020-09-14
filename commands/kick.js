module.exports = {
	name: 'kick',
	description: 'Quando você bardenar, os adm vai usar isso em você.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Mas o cara burro, que kicka o vento?');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Vish!!! adm fico puto, quer kickar na ro... digo kickar: ${taggedUser.username}`);
	},
};