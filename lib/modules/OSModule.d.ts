import { PhotinoModule } from '../PhotinoModule';
export declare class OSModule extends PhotinoModule {
    readonly name: string;
    isWindows(): Promise<boolean>;
    isLinux(): Promise<boolean>;
    isMacOs(): Promise<boolean>;
    getEnvar(key: string): Promise<string>;
    cmd(command: string): Promise<string>;
    showOpenFile(title: string, filters: string[], multiSelect?: boolean, defaultPath?: string): Promise<string>;
    showSaveFile(title: string, filters: string[], defaultPath?: string): Promise<string>;
    showSelectFolder(title: string, defaultPath?: string): Promise<string>;
}
