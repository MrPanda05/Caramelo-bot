module.exports = {
	name: 'teste',
	description: 'testa as coisa',
     aliases: ['testão', 't'],
     //arquivo pra testa comando, sem limite
	execute(message, args){
          function getUserFromMention(mention) {
               if (!mention) return;
          
               if (mention.startsWith('<@') && mention.endsWith('>')) {
                    mention = mention.slice(2, -1);
          
                    if (mention.startsWith('!')) {
                         mention = mention.slice(1);
                    }
          
                    return client.users.cache.get(mention);
               }
          }
          
     }
}
          
              
          