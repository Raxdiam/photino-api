import { PhotinoModule } from '../PhotinoModule';
export class OSModule extends PhotinoModule {
    name = 'osModule';
    isWindows() {
        return this.send(this.isWindows.name);
    }
    isLinux() {
        return this.send(this.isLinux.name);
    }
    isMacOs() {
        return this.send(this.isMacOs.name);
    }
    getEnvar(key) {
        return this.send(this.getEnvar.name, key);
    }
    cmd(command) {
        return this.send(this.cmd.name, command);
    }
}
