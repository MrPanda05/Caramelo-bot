const Discord = require('discord.js');
module.exports = {
	name: 'regras',
	//aliases: [''],
	//description: 'regras',
    execute(message) {
        const regras = new Discord.MessageEmbed()
        .setColor('#ff0f67')
        .setTitle('Regras gerais do server!')
        .addFields(
            { name: '1 • Tenha um respeito basico', value: 'Respeite para ser respeitado, caso você discorda de alguem, aja como uma pessoa civilizada!'},
            { name: '2 • Não fique divulgando coisa nas DMs dos outros', value: 'Ninguem quer ser incomodado, use <#782962562978807868> para divulgar suas coisas!'},
            { name: '3 • Cuidado com oque você posta', value: 'Esse possivelmente Discord é utilizado por pessoas de todas as idades, então cuidado com os assuntos e imagens compartilhados!, contudo no futuro talvez eu crie canal somente para (+18)!'},
            { name: '4 • Você pode falar mau da moderação!', value: 'Só não fique spammando os adm, que talvez você ganhe um kick'}
        );

        return message.channel.send('Leia com atenção!' , regras);
    }
}
