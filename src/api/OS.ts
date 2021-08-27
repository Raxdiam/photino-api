import type { Photino } from '..';
import APIBase from './APIBase';

export interface DialogFilter {
  name: string;
  patterns: string[];
}

export interface DialogResult {
  success: boolean;
  path: string;
  paths: string[];
}

export default class OS extends APIBase {
  protected ns: string = 'os';

  constructor(photino: Photino) {
    super(photino);
  }

  isWindows(): Promise<boolean> {
    return this.photino.send({ ns: this.ns, action: 'isWindows' });
  }

  isLinux(): Promise<boolean> {
    return this.photino.send({ ns: this.ns, action: 'isLinux' });
  }

  isFreeBSD(): Promise<boolean> {
    return this.photino.send({ ns: this.ns, action: 'isFreeBSD' });
  }

  isOSX(): Promise<boolean> {
    return this.photino.send({ ns: this.ns, action: 'isOSX' });
  }

  joinPaths(...paths: string[]): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'joinPaths', params: { paths } });
  }

  cmd(command: string): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'cmd', params: { command } });
  }

  showOpenFileDialog(title: string, multiselect: boolean, ...filters: DialogFilter[]): Promise<DialogResult> {
    return this.photino.send({ ns: this.ns, action: 'showOpenFileDialog', params: { title, multiselect, filters } });
  }

  showOpenFolderDialog(title: string): Promise<DialogResult> {
    return this.photino.send({ ns: this.ns, action: 'showOpenFolderDialog', params: { title } });
  }

  showSaveFileDialog(title: string, ...filters: DialogFilter[]): Promise<DialogResult> {
    return this.photino.send({ ns: this.ns, action: 'showSaveFileDialog', params: { title, filters } });
  }
}
