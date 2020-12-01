module.exports = {
    name: 'ban',
    guildOnly: true,
    execute(message, args) {
       //faze comando de banir
       //falta sabe como que faz kkkk

        if (!message.member.hasPermission('BAN_MEMBERS')) {
			return message.reply('Você não tem permissão para banir alguem!');
        }

      
        

    }
}