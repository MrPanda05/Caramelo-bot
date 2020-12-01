const Discord = require('discord.js');
module.exports = {
    name: 'social',
    execute(message, args) {
        const social = new Discord.MessageEmbed()
        .setTitle('Siga o Neeko!')
        .setColor('#f67aff')
        .addFields( 
            { name: 'Twitch!', value: 'https://www.twitch.tv/neekobh'},
            { name: 'Youtube!', value:'https://www.youtube.com/channel/UC2sza4_WY2cYCj60A0id4QQ'},
            { name: 'Canal de vods!', value: 'https://www.youtube.com/channel/UCgpAZkvJaZxQx84eXFSZgOA'},
            { name: 'Twitter!', value: 'https://twitter.com/MrPanda0564'},
        );
        
        return message.channel.send(social);
    }

}