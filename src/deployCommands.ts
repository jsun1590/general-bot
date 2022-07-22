export {};
import { ApplicationCommandType } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();
import glob from 'glob';
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

const token = process.env.token;
const applicationId = process.env.application_id;
const guildId = process.env.guild_id;

const commandFiles = glob.sync('**/*.ts', { cwd: 'src/commands' });
const commands: ApplicationCommandType[] = [];
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(applicationId, guildId), {
    body: commands,
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
