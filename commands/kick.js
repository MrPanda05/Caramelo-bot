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
          message.channel.send('Não funfa kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
	},
};