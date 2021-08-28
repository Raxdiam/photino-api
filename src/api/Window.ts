import type Photino from '../Photino';
import APIBase from './APIBase';

export default class Window extends APIBase {
  protected ns: string = 'window';

  constructor(photino: Photino) {
    super(photino);
  }

  getTitle(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getTitle' });
  }

  getMaximized(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getMaximized' });
  }

  getMinimized(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getMinimized' });
  }

  getDevToolsEnabled(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getDevToolsEnabled' });
  }

  getContextMenuEnabled(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getContextMenuEnabled' });
  }

  getTopMost(): Promise<string> {
    return this.photino.send({ ns: this.ns, action: 'getTopMost' });
  }

  setTitle(title: string): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setTitle', params: { title } });
  }

  setSize(width: number, height: number): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setSize', params: { width, height } });
  }

  setLocation(x: number, y: number): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setLocation', params: { x, y } });
  }

  setMaximized(maximized: boolean): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setMaximized', params: { maximized } });
  }

  setMinimized(minimized: boolean): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setMinimized', params: { minimized } });
  }

  setDevToolsEnabled(enabled: boolean): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setDevToolsEnabled', params: { enabled } });
  }

  setContextMenuEnabled(enabled: boolean): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setContextMenuEnabled', params: { enabled } });
  }

  setTopMost(topMost: boolean): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'setTopMost', params: { topMost } });
  }

  close(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'close' });
  }

  drag() {
    this.photino.sendRaw('drag');
  }

  resize(direction: string) {
    this.photino.sendRaw(`r${direction}`);
  }  
}
