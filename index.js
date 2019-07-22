const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const token = 'token here';

client.on('ready', () => {
  console.log(`Selfbot started on user ${client.user.tag}!`);
  console.log(`The prefix is: ${prefix}`);
});

client.on('message', async message => {
  const args = message.content.split(' ').slice(1)
  if(message.author.id != client.user.id) return;
  if(message.content.startsWith(`${prefix}playing`)) {
    message.delete();
    client.user.setActivity(args.join(' '));
  } else if(message.content.startsWith(`${prefix}watching`)) {
    message.delete();
    client.user.setActivity(args.join(' '), { type: 'WATCHING'});
  } else if(message.content.startsWith(`${prefix}listening`)) {
    message.delete();
    client.user.setActivity(args.join(' '), { type: 'LISTENING'});
  }
});

client.login(token);
