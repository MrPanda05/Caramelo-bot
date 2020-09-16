module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		
		message.channel.send({embed: {
			color: 3447003,
			description: "Poggers",
			author: {
				name: message.author.username
			}
		  }});
	},
};