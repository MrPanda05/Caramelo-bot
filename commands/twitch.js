const Discord = require('discord.js');
module.exports = {
	name: 'twitch',
	aliases: ['on', 'live'],
	description: 'To on seu lixo',
    //cooldown: 5,
    execute(message, args) {
        //quando eu estiver live na twitch
        const liveOn = new Discord.MessageEmbed()
        .setTitle('To on!!')
        .setURL('https://www.twitch.tv/neekobh')
        .setDescription('Live de algo aekkk')
        .setColor('RAMDOM')
        .addField('https://www.twitch.tv/neekobh', '\u200B')
        .setThumbnail('https://imgur.com/5bRCeql.png')
        
        const linkTwitch = new Discord.MessageEmbed()
        .setTitle('Twitch')
        .setURL('https://www.twitch.tv/neekobh')
        .addField('https://www.twitch.tv/neekobh', '\u200B')
        .setColor('RAMDOM')
        .setThumbnail('https://imgur.com/5bRCeql.png')
        .setDescription('Live do Neeko')


        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send('Eae @everyone kkkk' ,liveOn);
        } else {
            message.channel.send(linkTwitch);
        }
    }
}
//comando simplificado por enquanto
//fazer esse comando checar pra ver se eu estiver on
//se eu estiver on manda o link da live, se não manda um texto triste
//Faze que nem aqueles bots de aviso que fica spammando toda hora que tem live