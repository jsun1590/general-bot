//import { Interaction } from 'discord.js';
import {} from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();
import glob from 'glob';
const { GatewayIntentBits, Client, Collection } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Get commands
client.commands = new Collection();
const commandFiles = glob.sync('**/*.ts', { cwd: 'src/commands' });
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  command['path'] = file;
  client.commands.set(command.data?.name, command);
}

//Get events
client.events = new Collection();
const eventFiles = glob.sync('**/*.ts', { cwd: 'src/events' });
for (const file of eventFiles) {
  const { event } = require(`./events/${file}`);
  console.log(file);
  client.events.set(event.name, event);

  // Add listener for each event, other than ready
  if (event.once)
    client.once(event.name, (...args: any) => event.run(client, ...args));
  else client.on(event.name, (...args: any) => event.run(client, ...args));
}

client.login(process.env.token);
