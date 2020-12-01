const Discord = require('discord.js');
module.exports = {
	name: 'twitch',
	aliases: ['on', 'live'],
	description: 'To on seu lixo',
    //cooldown: 5,
    execute(message) {
        //quando eu estiver live na twitch
        const liveOn = new Discord.MessageEmbed()
        .setTitle('Entra na Live, ou não!')
        .setURL('https://www.twitch.tv/neekobh')
        .setDescription('@everyone, live da motocicleta')
        .setColor('RAMDOM')
        //\u200b adiciona um negocio vazio
        .addField('https://www.twitch.tv/neekobh', '\u200b')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/defeda54-05da-46c4-b8a3-2c29b871d09e-profile_image-70x70.png')
        
        const linkTwitch = new Discord.MessageEmbed()
        .setTitle('Twitch')
        .setURL('https://www.twitch.tv/neekobh')
        .addField('https://www.twitch.tv/neekobh', '\u200b')
        .setColor('RAMDOM')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/defeda54-05da-46c4-b8a3-2c29b871d09e-profile_image-70x70.png')
        .setDescription('Live do Neeko')


        if (message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send(liveOn);
        } else {
            message.channel.send(linkTwitch);
        }
    }
}
//comando simplificado por enquanto
//fazer esse comando checar pra ver se eu estiver on
//se eu estiver on manda o link da live, se não manda um texto triste
//Faze que nem aqueles bots de aviso que fica spammando toda hora que tem live