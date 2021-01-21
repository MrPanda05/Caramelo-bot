const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'kicka vagabundo kkkk',
     aliases: ['k'],
     guildOnly: true,
     syntax: 'kick tag de alguem',
     //Comando pra banir vagabundo
     /*
     1-Comando de banirs
     -Somente quem tem permissão pode user
     -Banir somente o primeiro
     -Caso queira banir mais, tem que usar virgula ou outra coisa seila
     2-Caso alguem não tem permissão
     -Enviar menssagem falando que não tem permissão
     3-Fazer uma versão de unban
     4-Muda tudo pra uma versão de kick
     BUGS:
     1-Quando bani alguem que não ta no servidor
     2-quando desbane alguem que já esta desbanido
     3-quando bane alguem de cargo maior ou igual
     */
	execute(message, args){
         const guilds =  new Discord.GuildMember();
          
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
          const member = getUserFromMention(args[0]);
          //const id = args[0];
          //Caso o cara não tem permissão
          if (!message.member.hasPermission('ADMINISTRATOR')) {
              return message.reply ('Você não tem permissão!');
          }
          //Casso cara tenha permissão, mas não tenha marcado alguem!
          if (message.member.hasPermission('ADMINISTRATOR') && !member) {
              return message.reply ('Marque alguem!');
          }
          const reason = args.slice(1).join(' ');
	    try {
			//testa outras parada aki
			guilds.kick(member, {reason});
	        } catch (error) {
		    return message.channel.send(`Não foi possível kickar está pessoa com o id: **${member}**\nErro: ${error}`);
	        }

	        return message.channel.send(`O usuário de id: **${member}** foi kickado`);
    }     
     
}

          

  
  