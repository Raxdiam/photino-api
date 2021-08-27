import type Photino from '../Photino';
import APIBase from './APIBase';

export default class Window extends APIBase {
  protected ns: string = 'window';

  constructor(photino: Photino) {
    super(photino);
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

  maximize(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'maximize' });
  }

  minimize(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'minimize' });
  }

  restore(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'restore' });
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

  drag() {
    this.photino.sendRaw('drag');
  }

  resize(direction: string) {
    this.photino.sendRaw(`r${direction}`);
  }

  /* show(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'show' });
  }

  hide(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'hide' });
  } */

  close(): Promise<void> {
    return this.photino.send({ ns: this.ns, action: 'close' });
  }
}
