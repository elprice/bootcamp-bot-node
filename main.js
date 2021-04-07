const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content.includes('good bot')) {
    msg.channel.send('I do my best.');
  }

  if (msg.content.startsWith('analyze')) {
    msg.channel.send('This discord has ' + msg.guild.memberCount + ' members.');
  }

});


client.login('PUT THE TOKEN YOU HAVE HERE');