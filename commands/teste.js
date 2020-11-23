module.exports = {
	name: 'teste',
	description: 'testa as coisa',
     aliases: ['testão'],
     //arquivo pra testa comando, sem limite
	execute(message){
          message.channel.send(`Tu nasceu em ${message.author.createdTimestamp}`);
     },
};
		