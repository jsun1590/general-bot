import { Client } from 'discord.js';

export class BaseEvent {
  readonly name: string;
  readonly once: boolean;
  run: (client: Client, ...args: any) => any;

  constructor(
    eventName: string,
    once: boolean,
    eventFunction: (client: Client, ...args: any) => any
  ) {
    this.name = eventName;
    this.once = once;
    this.run = eventFunction;
  }
}
