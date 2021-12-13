import { Photino } from '../Photino';
import { PhotinoModule } from '../PhotinoModule';
export class WindowModule extends PhotinoModule {
    name = 'window';
    getTitle() {
        return this.send(this.getTitle.name);
    }
    getMaximized() {
        return this.send(this.getMaximized.name);
    }
    getMinimized() {
        return this.send(this.getMinimized.name);
    }
    getDevToolsEnabled() {
        return this.send(this.getDevToolsEnabled.name);
    }
    getContextMenuEnabled() {
        return this.send(this.getContextMenuEnabled.name);
    }
    getTopMost() {
        return this.send(this.getTopMost.name);
    }
    getChromeless() {
        return this.send(this.getChromeless.name);
    }
    getFullScreen() {
        return this.send(this.getFullScreen.name);
    }
    getResizable() {
        return this.send(this.getResizable.name);
    }
    getWidth() {
        return this.send(this.getWidth.name);
    }
    getHeight() {
        return this.send(this.getHeight.name);
    }
    getTop() {
        return this.send(this.getTop.name);
    }
    getLeft() {
        return this.send(this.getLeft.name);
    }
    setTitle(title) {
        return this.send(this.setTitle.name, title);
    }
    setMaximized(maximized) {
        return this.send(this.setMaximized.name, maximized);
    }
    setMinimized(minimized) {
        return this.send(this.setMinimized.name, minimized);
    }
    setDevToolsEnabled(enabled) {
        return this.send(this.setDevToolsEnabled.name, enabled);
    }
    setContextMenuEnabled(enabled) {
        return this.send(this.setContextMenuEnabled.name, enabled);
    }
    setTopMost(topMost) {
        return this.send(this.setTopMost.name, topMost);
    }
    setChromeless(chromeless) {
        return this.send(this.setChromeless.name, chromeless);
    }
    setFullScreen(fullScreen) {
        return this.send(this.setFullScreen.name, fullScreen);
    }
    setResizable(resizable) {
        return this.send(this.setResizable.name, resizable);
    }
    setWidth(width) {
        return this.send(this.setWidth.name, width);
    }
    setHeight(height) {
        return this.send(this.setHeight.name, height);
    }
    setTop(top) {
        return this.send(this.setTop.name, top);
    }
    setLeft(left) {
        return this.send(this.setLeft.name, left);
    }
    close() {
        return this.send(this.close.name);
    }
    load(path) {
        return this.send(this.load.name, path);
    }
    loadRawString(content) {
        return this.send(this.loadRawString.name, content);
    }
    showSystemMenu() {
        return this.send(this.showSystemMenu.name);
    }
    center() {
        return this.send(this.center.name);
    }
    hitTest(hitTest) {
        Photino.sendRaw(`ht:${hitTest}`);
    }
    drag() {
        this.hitTest('drag');
    }
    left() {
        this.hitTest('left');
    }
    right() {
        this.hitTest('right');
    }
    top() {
        this.hitTest('top');
    }
    topLeft() {
        this.hitTest('topLeft');
    }
    topRight() {
        this.hitTest('topRight');
    }
    bottom() {
        this.hitTest('bottom');
    }
    bottomLeft() {
        this.hitTest('bottomLeft');
    }
    bottomRight() {
        this.hitTest('bottomRight');
    }
}
