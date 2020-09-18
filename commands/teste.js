module.exports = {
	name: 'test',
	description: 'Mosta o avatar dos meliantes.',
     //aliases: ['icon', 'pfp'],
     //Pasar isso tudo para argumentos, não ta funcionando!
	execute(message) {
		if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                 message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
            }
    
             message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }
    
        message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
    }
};
