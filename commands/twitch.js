const Discord = require('discord.js');
module.exports = {
	name: 'twitch',
	aliases: ['on', 'live'],
	description: 'To on seu lixo',
    cooldown: 5,
    execute(message) {
        //quando eu estiver live na twitch
        const liveOn = new Discord.MessageEmbed()
        .setTitle('Entra na Live, ou não!')
        .setURL('https://www.twitch.tv/mrpanda064')
        .setDescription('@everyone, live da motocicleta')
        .setColor('#fa99ff')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/defeda54-05da-46c4-b8a3-2c29b871d09e-profile_image-70x70.png')
        message.channel.send(liveOn);

    }
}
//comando simplificado por enquanto
//fazer esse comando checar pra ver se eu estiver on
//se eu estiver on manda o link da live, se não manda um texto triste
//Faze que nem aqueles bots de aviso que fica spammando toda hora que tem live