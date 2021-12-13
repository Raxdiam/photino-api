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
    showOpenFile(title, filters, multiSelect = false, defaultPath = null) {
        return this.send(this.showOpenFile.name, title, filters, multiSelect, defaultPath);
    }
    showSaveFile(title, filters, defaultPath = null) {
        return this.send(this.showSaveFile.name, title, filters, defaultPath);
    }
    showSelectFolder(title, defaultPath = null) {
        return this.send(this.showSelectFolder.name, title, defaultPath);
    }
}
