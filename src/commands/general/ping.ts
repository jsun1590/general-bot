import { SlashCommandBuilder } from '@discordjs/builders';
const { CommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Test the bot's latency."),
  async execute(interaction: typeof CommandInteraction) {
    console.log(`${interaction.member.displayName} pinged!`);

    let ping = Math.round(interaction.client.ws.ping).toString();
    await interaction.reply(`:ping_pong: Pong! Latency: ${ping}ms`);
  },
};
