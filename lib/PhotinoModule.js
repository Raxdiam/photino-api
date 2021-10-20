import { Photino } from './Photino';
const moduleRegex = /Module\.[a-zA-Z0-9_]+/g;
export class PhotinoModule {
    send(name, ...parameters) {
        /* const line = new Error().stack.split('\n')[2];
        const name = line.match(moduleRegex)[0].split('.')[1]; */
        return Photino.send(this.name, name, ...parameters);
    }
}
