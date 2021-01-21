const Discord = require('discord.js');

module.exports = {
	name: 'desban',
	description: 'desbane ',
     aliases: ['desbanido', 'unban'],
     guildOnly: true,
     //Comando pra banir vagabundo
     /*
     1-Comando de banir
     -Somente quem tem permissão pode user
     -Banir somente o primeiro
     -Caso queira banir mais, tem que usar virgula ou outra coisa seila
     2-Caso alguem não tem permissão
     -Enviar menssagem falando que não tem permissão
     3-Fazer uma versão de unban
     4-Muda tudo pra uma versão de kick
     */
	execute(message, args){
         // const client = new Discord.Client();
          
          function getUserFromMention(mention) {
               if (!mention) return;
          
               if (mention.startsWith('<@') && mention.endsWith('>')) {
                    mention = mention.slice(2, -1);
          
                    if (mention.startsWith('!')) {
                         mention = mention.slice(1);
                    }
          
                    return (mention);
               }
          }
          const user = getUserFromMention(args[0]);
   
          //Caso o cara não tem permissão
          if (!message.member.hasPermission('ADMINISTRATOR')) {
              return message.reply ('Você não tem permissão!');
          }
          //Casso cara tenha permissão, mas não tenha marcado alguem!
          if (message.member.hasPermission('ADMINISTRATOR') && !user) {
              return message.reply ('Marque alguem!');
          }
          const reason = args.slice(1).join(' ');
	    try {
		     message.guild.members.unban(user);
	        } catch (error) {
		    return message.channel.send(`Não foi possivel desbanir**${user}**\n : ${error}`);
            }
            if (message.delete().catch(error => {
                if (error.code !== Discord.Constants.APIErrors.UNKNOWN_BAN) {
                    console.error('Failed to delete the message:', error);
                }
            }));

	        return message.channel.send(`**${user}** desbanido`);
    }     
     
}

          

  