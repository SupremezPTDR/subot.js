const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone, Salut à tous !', { disableEveryone: false });  
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), Salut à tous');  
});

client.login('NjQxNjczMzc5NzkwNzE2OTY5.XgO7dQ.SmKU9C-17fpnBUDbVgQOD7HwvHg'); 