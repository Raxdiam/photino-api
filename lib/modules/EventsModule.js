import { PhotinoModule } from '../PhotinoModule';
import { Photino } from '../Photino';
export class EventsModule extends PhotinoModule {
    listeners;
    name = 'events';
    constructor() {
        super();
        this.listeners = {};
        window.external.receiveMessage((msg) => {
            if (!msg.startsWith('ev:'))
                return;
            let type;
            let data;
            if (msg.includes('|')) {
                const parts = msg.split('|');
                type = parts[0].split(':')[1];
                let entries;
                if (parts[1].includes(',')) {
                    entries = parts[1].split(',').map((x) => x.split('='));
                }
                else {
                    entries = [parts[1].split('=')];
                }
                data = Object.fromEntries(entries);
            }
            else {
                type = msg.split(':')[1];
            }
            if (!type)
                return;
            if (!this.listeners[type])
                return;
            for (const listener of this.listeners[type]) {
                listener(data);
            }
        });
    }
    on(type, listener) {
        if (!this.listeners[type])
            this.listeners[type] = [];
        // Tell Photino.API backend to start sending event output of given type
        Photino.sendRaw(`ev:${type}`);
        this.listeners[type].push(listener);
    }
    reset() {
        this.listeners = {};
        Photino.sendRaw(`ev:reset`);
    }
}
