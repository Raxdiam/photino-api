import { Photino } from './Photino';

const moduleRegex = /Module\.[a-zA-Z0-9_]+/g;

export abstract class PhotinoModule {
  abstract name: string;

  protected send<T>(name: string, ...parameters: any[]): Promise<T> {
    /* const line = new Error().stack.split('\n')[2];
    const name = line.match(moduleRegex)[0].split('.')[1]; */
    return Photino.send(this.name, name, ...parameters);
  }
}
