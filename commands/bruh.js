module.exports = {
	name: 'Bruh',
    description: 'Bruh momento detected',
    aliases: ['bruh'],
	cooldown: 5,
	execute(message, args) {
        //const bruhImage =new Discord.MessageAttachment('../Prog/Util/bruhmoment.jpg');
        if (!message.mentions.users || !args.length) {
            return message.reply('Bruh momento detected!!');
            
        
        }
        //variable to tag in bruh momentos
        //cria função pra marca pessoa
        const bruhUserTag = message.mentions.users.first();

        message.channel.send(`${bruhUserTag} bruh!`)
    
    },
};
		
		