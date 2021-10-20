import { PhotinoModule } from '../PhotinoModule';
declare type Encoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';
export declare class IOModule extends PhotinoModule {
    readonly name: string;
    readFile(path: string): Promise<Uint8Array>;
    readFileText(path: string, encoding?: Encoding | null): Promise<string>;
    readFileLines(path: string, encoding?: Encoding | null): Promise<string[]>;
    writeFile(path: string, data: Uint8Array): Promise<void>;
    writeFileText(path: string, contents: string, encoding?: Encoding | null): Promise<void>;
    writeFileLines(path: string, contents: string[], encoding?: Encoding | null): Promise<void>;
    listFiles(path: string, searchPattern?: string, recursive?: boolean): Promise<string[]>;
    listFolders(path: string, searchPattern?: string, recursive?: boolean): Promise<string[]>;
    createFolder(path: string): Promise<void>;
    deleteFile(path: string): Promise<void>;
    deleteFolder(path: string, recursive?: boolean): Promise<void>;
    fileExists(path: string): Promise<boolean>;
    folderExists(path: string): Promise<boolean>;
    resolvePath(path: string): Promise<string>;
    getExtension(path: string): Promise<string>;
}
export {};
