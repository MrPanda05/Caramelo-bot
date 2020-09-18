module.exports = {
	name: 'avatar',
	description: 'Mosta o avatar dos meliantes.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send({embed : {
				color:('#583ff4'),
				author: {
					name: message.author.username,
				},
				image:{
					url: `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
				}
			}});
		}
		/* Reprograma  essa porra
		const avatarList = message.mentions.users.map(user => {
			`${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});*/
		const user = getUserFromMention(args[0]);
	},
};