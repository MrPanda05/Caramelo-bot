const Discord = require('discord.js');

module.exports = {
	name: 'teste',
	description: 'testa as coisa',
     aliases: ['testão', 't'],
     //arquivo pra testa comando, sem limite
	execute(message, args){

          const getUserFromMention= function(mention) {
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

          if(!user) {
               return message.reply('marque alguem!');
          }
          return message.channel.send(user.tag);

     }
     
}