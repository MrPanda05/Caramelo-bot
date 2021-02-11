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
        message.channel.send('oi...');
  },
};
          

