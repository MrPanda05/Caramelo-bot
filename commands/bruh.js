const Discord = require('discord.js');
module.exports = {
	name: 'Bruh',
    description: 'Bruh momento detected',
    aliases: ['bruh'],
	cooldown: 5,
	execute(message, args) {
        //embed de bruh especial
        const bruhEmbed = new Discord.MessageEmbed()
            .setFooter('bruh')
            .setTitle('bruh')
            .setURL('https://youtu.be/D2_r4q2imnQ')
            .setDescription('bruh momento detected')
            .setImage('https://i.imgur.com/HjFZfJp.png')
        message.channel.send(bruhEmbed);
    }
}

/* Por forma de mandar umbruh em forma de tag para outro nego

if (!message.mentions.users.size) {
            return message.channel.send(bruhEmbed);
            */