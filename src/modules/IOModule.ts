import { PhotinoModule } from '../PhotinoModule';

type Encoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'latin1' | 'binary' | 'hex';

export class IOModule extends PhotinoModule {
  readonly name: string = 'io';

  readFile(path: string): Promise<Uint8Array> {
    return this.send(this.readFile.name, path);
  }

  readFileText(path: string, encoding: Encoding | null = null): Promise<string> {
    return this.send(this.readFileText.name, path, encoding);
  }

  readFileLines(path: string, encoding: Encoding | null = null): Promise<string[]> {
    return this.send(this.readFileLines.name, path, encoding);
  }

  writeFile(path: string, data: Uint8Array): Promise<void> {
    return this.send(this.writeFile.name, path, data);
  }

  writeFileText(path: string, contents: string, encoding: Encoding | null = null): Promise<void> {
    return this.send(this.writeFileText.name, path, contents, encoding);
  }

  writeFileLines(path: string, contents: string[], encoding: Encoding | null = null): Promise<void> {
    return this.send(this.writeFileLines.name, path, contents, encoding);
  }

  listFiles(path: string, searchPattern: string = null, recursive: boolean = false): Promise<string[]> {
    return this.send(this.listFiles.name, path, searchPattern, recursive);
  }

  listFolders(path: string, searchPattern: string = null, recursive: boolean = false): Promise<string[]> {
    return this.send(this.listFolders.name, path, searchPattern, recursive);
  }

  createFolder(path: string): Promise<void> {
    return this.send(this.createFolder.name, path);
  }

  deleteFile(path: string): Promise<void> {
    return this.send(this.deleteFile.name, path);
  }

  deleteFolder(path: string, recursive: boolean = false): Promise<void> {
    return this.send(this.deleteFolder.name, path, recursive);
  }

  fileExists(path: string): Promise<boolean> {
    return this.send(this.fileExists.name, path);
  }

  folderExists(path: string): Promise<boolean> {
    return this.send(this.folderExists.name, path);
  }

  resolvePath(path: string): Promise<string> {
    return this.send(this.resolvePath.name, path);
  }

  getExtension(path: string): Promise<string> {
    return this.send(this.getExtension.name, path);
  }
}
