import { BaseEvent } from '../baseEvent';
import { InteractionType, Interaction, Client } from 'discord.js';

async function run(client: any) {
  console.log(`Logged in as ${client.user.tag}!`);
}

module.exports = {
  event: new BaseEvent('ready', true, run),
};
