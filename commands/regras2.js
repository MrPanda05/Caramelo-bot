const Discord = require('discord.js');
module.exports = {
	name: 'regras2',
	//aliases: [''],
	//description: 'regras',
    execute(message) {
        const avisos = new Discord.MessageEmbed()
            .setColor('#34cfeb')
            .setTitle('Avisos!')
            .addFields(
                { name: 'Punições!', value: 'Você recebera BAN PERMANENTE! se você postar gore e pornografia ilegal!' },
                { name: 'Mudanças!', value: 'As regras estão sujeitas à mudanças e updates conforme o necessário!'},
            );

            return message.channel.send(avisos);
    }
}



