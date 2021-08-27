import type { Photino } from '..';
import APIBase from './APIBase';

export default class IO extends APIBase {
  protected readonly ns = 'io';

  constructor(photino: Photino) {
    super(photino);
  }

  readFileText(path: string, encoding: BufferEncoding | null = null): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'readFileText', params: { path, encoding } });
  }

  readFileLines(path: string, encoding: BufferEncoding | null = null): Promise<string[]> {
    return this.photino.send({ ns: this.ns, action: 'readFileLines', params: { path, encoding } });
  }

  readFile(path: string): Promise<Uint8Array> {
    return this.photino.send({ ns: this.ns, action: 'readFile', params: { path } });
  }

  writeFile(path: string, contents: string, encoding: BufferEncoding | null = null): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'writeFile', params: { path, contents, encoding } });
  }

  listFiles(path: string, searchPattern: string = null, recursive: boolean = false): Promise<string[]> {
    return this.photino.send({ ns: this.ns, action: 'listFiles', params: { path, searchPattern, recursive } });
  }

  listFolders(path: string, searchPattern: string = null, recursive: boolean = false): Promise<string[]> {
    return this.photino.send({ ns: this.ns, action: 'listFolders', params: { path, searchPattern, recursive } });
  }

  createFolder(path: string): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'createFolder', params: { path } });
  }

  deleteFile(path: string): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'deleteFile', params: { path } });
  }

  deleteFolder(path: string, recursive: boolean = false): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'deleteFolder', params: { path, recursive } });
  }

  cwd(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'cwd', params: {} });
  }
}
