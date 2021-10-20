import { PhotinoModule } from '../PhotinoModule';
import { PhotinoEvent, PhotinoLocationEvent, PhotinoSizeEvent } from '../data/PhotinoEvent';
import { Photino } from '../Photino';

interface PhotinoEventMap {
  size: PhotinoSizeEvent;
  location: PhotinoLocationEvent;
  closing: PhotinoEvent;
  focusIn: PhotinoEvent;
  focusOut: PhotinoEvent;
  maximize: PhotinoEvent;
  minimize: PhotinoEvent;
  restore: PhotinoEvent;
}

interface PhotinoEventMessage {
  type: string;
  data: any;
  resset?: boolean;
}

export class EventsModule extends PhotinoModule {
  private listeners: { [type: string]: ((e: PhotinoEvent) => any)[] };
  readonly name: string = 'events';

  constructor() {
    super();

    this.listeners = {};
    window.external.receiveMessage((msg) => {
      if (!msg.startsWith('ev:')) return;

      let type: string;
      let data: any;

      if (msg.includes('|')) {
        const parts = msg.split('|');
        type = parts[0].split(':')[1];

        let entries: string[][];

        if (parts[1].includes(',')) {
          entries = parts[1].split(',').map((x) => x.split('='));
        } else {
          entries = [parts[1].split('=')];
        }

        data = Object.fromEntries(entries);
      } else {
        type = msg.split(':')[1];
      }

      if (!type) return;
      if (!this.listeners[type]) return;

      for (const listener of this.listeners[type]) {
        listener(data);
      }
    });
  }

  on<K extends keyof PhotinoEventMap>(type: K, listener: (e: PhotinoEventMap[K]) => any) {
    if (!this.listeners[type]) this.listeners[type] = [];
    // Tell Photino.API backend to start sending event output of given type
    Photino.sendRaw(`ev:${type}`);
    this.listeners[type].push(listener);
  }

  reset() {
    this.listeners = {};
    Photino.sendRaw(`ev:reset`);
  }
}
