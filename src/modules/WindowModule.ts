import { Photino } from '../Photino';
import { PhotinoModule } from '../PhotinoModule';

export type HitTest = 'drag' | 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export class WindowModule extends PhotinoModule {
  readonly name: string = 'window';

  getTitle(): Promise<string> {
    return this.send(this.getTitle.name);
  }

  getMaximized(): Promise<boolean> {
    return this.send(this.getMaximized.name);
  }

  getMinimized(): Promise<boolean> {
    return this.send(this.getMinimized.name);
  }

  getDevToolsEnabled(): Promise<boolean> {
    return this.send(this.getDevToolsEnabled.name);
  }

  getContextMenuEnabled(): Promise<boolean> {
    return this.send(this.getContextMenuEnabled.name);
  }

  getTopMost(): Promise<boolean> {
    return this.send(this.getTopMost.name);
  }

  getChromeless(): Promise<boolean> {
    return this.send(this.getChromeless.name);
  }

  getFullScreen(): Promise<boolean> {
    return this.send(this.getFullScreen.name);
  }

  getResizable(): Promise<boolean> {
    return this.send(this.getResizable.name);
  }

  getWidth(): Promise<number> {
    return this.send(this.getWidth.name);
  }

  getHeight(): Promise<number> {
    return this.send(this.getHeight.name);
  }

  getTop(): Promise<number> {
    return this.send(this.getTop.name);
  }

  getLeft(): Promise<number> {
    return this.send(this.getLeft.name);
  }

  setTitle(title: string): Promise<void> {
    return this.send(this.setTitle.name, title);
  }

  setMaximized(maximized: boolean): Promise<void> {
    return this.send(this.setMaximized.name, maximized);
  }

  setMinimized(minimized: boolean): Promise<void> {
    return this.send(this.setMinimized.name, minimized);
  }

  setDevToolsEnabled(enabled: boolean): Promise<void> {
    return this.send(this.setDevToolsEnabled.name, enabled);
  }

  setContextMenuEnabled(enabled: boolean): Promise<void> {
    return this.send(this.setContextMenuEnabled.name, enabled);
  }

  setTopMost(topMost: boolean): Promise<void> {
    return this.send(this.setTopMost.name, topMost);
  }

  setChromeless(chromeless: boolean): Promise<void> {
    return this.send(this.setChromeless.name, chromeless);
  }

  setFullScreen(fullScreen: boolean): Promise<void> {
    return this.send(this.setFullScreen.name, fullScreen);
  }

  setResizable(resizable: boolean): Promise<void> {
    return this.send(this.setResizable.name, resizable);
  }

  setWidth(width: number): Promise<void> {
    return this.send(this.setWidth.name, width);
  }

  setHeight(height: number): Promise<void> {
    return this.send(this.setHeight.name, height);
  }

  setTop(top: number): Promise<void> {
    return this.send(this.setTop.name, top);
  }

  setLeft(left: number): Promise<void> {
    return this.send(this.setLeft.name, left);
  }

  close(): Promise<void> {
    return this.send(this.close.name);
  }

  load(path: string): Promise<void> {
    return this.send(this.load.name, path);
  }

  loadRawString(content: string): Promise<void> {
    return this.send(this.loadRawString.name, content);
  }

  center(): Promise<void> {
    return this.send(this.center.name);
  }

  hitTest(hitTest: HitTest | string) {
    Photino.sendRaw(`ht:${hitTest}`);
  }

  drag() {
    Photino.sendRaw('ht:drag');
  }

  resizeTopLeft() {
    Photino.sendRaw('ht:nw');
  }

  resizeTop() {
    Photino.sendRaw('ht:n');
  }

  resizeTopRight() {
    Photino.sendRaw('ht:ne');
  }

  resizeRight() {
    Photino.sendRaw('ht:e');
  }

  resizeBottomRight() {
    Photino.sendRaw('ht:se');
  }

  resizeBottom() {
    Photino.sendRaw('ht:s');
  }

  resizeBottomLeft() {
    Photino.sendRaw('ht:sw');
  }

  resizeLeft() {
    Photino.sendRaw('ht:w');
  }
}
