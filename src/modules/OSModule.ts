import { PhotinoModule } from '../PhotinoModule';

export class OSModule extends PhotinoModule {
  readonly name: string = 'osModule';

  isWindows(): Promise<boolean> {
    return this.send(this.isWindows.name);
  }

  isLinux(): Promise<boolean> {
    return this.send(this.isLinux.name);
  }

  isMacOs(): Promise<boolean> {
    return this.send(this.isMacOs.name);
  }

  getEnvar(key: string): Promise<string> {
    return this.send(this.getEnvar.name, key);
  }

  cmd(command: string): Promise<string> {
    return this.send(this.cmd.name, command);
  }
}
