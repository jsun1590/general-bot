import { BaseEvent } from '../baseEvent';
import { InteractionType, Interaction, Client } from 'discord.js';

async function run(client: any, interaction: Interaction) {
  if (interaction.type !== InteractionType.ApplicationCommand) return;
  const command = client.commands.get(interaction.commandName);
  await command.execute(interaction);
}

module.exports = {
  event: new BaseEvent('interactionCreate', false, run),
};
