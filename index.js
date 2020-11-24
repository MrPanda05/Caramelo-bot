const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

/*const dispatcher = connection.play('audio.mp3');
connection.play('https://www.youtube.com/');
connection.play('audio.mp3');

dispatcher.on('start', () => {
	console.log('audio.mp3 is now playing!');
});

dispatcher.on('finish', () => {
	console.log('audio.mp3 has finished playing!');
});

dispatcher.on('error', console.error);

const broadcastDispatcher = broadcast.play('music.mp3');


const broadcast = client.voice.createBroadcast();
// Play audio on the broadcast
const dispatcher = broadcast.play('audio.mp3');
broadcast.play('https://www.youtube.com/');

broadcast.on('subscribe', dispatcher => {
	console.log(`Broadcast playing in ${dispatcher.player.voiceConnection.channel.name}`);
});

// Emits the subscribe event on the broadcast
connection.play(broadcast);
Não sei mexer com essa porra ainda
*/
//Ve se o bot ta funfando
client.once('ready', () => {
	console.log('I\'m ready!');
});

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

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Eu não uso esse comando em DM! bobão');
	}

	if (command.args && !args.length) {
		let reply = `Fala direito, ${message.author}!`;

		if (command.usage) {
			reply += `\nO anta, o correto é: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`O precoce do krl espera ${timeLeft.toFixed(1)} segundo(s), antes de usar \`${command.name}\` novamente.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Pera, deu erro aki!');
	}
});

client.login(token);