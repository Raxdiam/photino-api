var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function uuid() {
  let dt = new Date().getTime();
  const uuid2 = "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
class PhotinoMessage {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "data");
    this.id = uuid();
    this.data = data;
  }
}
class PhotinoModule {
  send(name, ...parameters) {
    return Photino.send(this.name, name, ...parameters);
  }
}
class AppModule extends PhotinoModule {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "app");
  }
  exit(exitCode) {
    return this.send(this.exit.name, exitCode);
  }
  cwd() {
    return this.send(this.cwd.name);
  }
}
class IOModule extends PhotinoModule {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "io");
  }
  readFile(path) {
    return this.send(this.readFile.name, path);
  }
  readFileText(path, encoding = null) {
    return this.send(this.readFileText.name, path, encoding);
  }
  readFileLines(path, encoding = null) {
    return this.send(this.readFileLines.name, path, encoding);
  }
  writeFile(path, data) {
    return this.send(this.writeFile.name, path, data);
  }
  writeFileText(path, contents, encoding = null) {
    return this.send(this.writeFileText.name, path, contents, encoding);
  }
  writeFileLines(path, contents, encoding = null) {
    return this.send(this.writeFileLines.name, path, contents, encoding);
  }
  listFiles(path, searchPattern = null, recursive = false) {
    return this.send(this.listFiles.name, path, searchPattern, recursive);
  }
  listFolders(path, searchPattern = null, recursive = false) {
    return this.send(this.listFolders.name, path, searchPattern, recursive);
  }
  createFolder(path) {
    return this.send(this.createFolder.name, path);
  }
  deleteFile(path) {
    return this.send(this.deleteFile.name, path);
  }
  deleteFolder(path, recursive = false) {
    return this.send(this.deleteFolder.name, path, recursive);
  }
  fileExists(path) {
    return this.send(this.fileExists.name, path);
  }
  folderExists(path) {
    return this.send(this.folderExists.name, path);
  }
  resolvePath(path) {
    return this.send(this.resolvePath.name, path);
  }
  getExtension(path) {
    return this.send(this.getExtension.name, path);
  }
}
class OSModule extends PhotinoModule {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "osModule");
  }
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
}
class WindowModule extends PhotinoModule {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "window");
  }
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
  center() {
    return this.send(this.center.name);
  }
  hitTest(hitTest) {
    Photino.sendRaw(`ht:${hitTest}`);
  }
  drag() {
    Photino.sendRaw("ht:drag");
  }
  resizeTopLeft() {
    Photino.sendRaw("ht:nw");
  }
  resizeTop() {
    Photino.sendRaw("ht:n");
  }
  resizeTopRight() {
    Photino.sendRaw("ht:ne");
  }
  resizeRight() {
    Photino.sendRaw("ht:e");
  }
  resizeBottomRight() {
    Photino.sendRaw("ht:se");
  }
  resizeBottom() {
    Photino.sendRaw("ht:s");
  }
  resizeBottomLeft() {
    Photino.sendRaw("ht:sw");
  }
  resizeLeft() {
    Photino.sendRaw("ht:w");
  }
}
class EventsModule extends PhotinoModule {
  constructor() {
    super();
    __publicField(this, "listeners");
    __publicField(this, "name", "events");
    this.listeners = {};
    window.external.receiveMessage((msg) => {
      if (!msg.startsWith("ev:"))
        return;
      let type;
      let data;
      if (msg.includes("|")) {
        const parts = msg.split("|");
        type = parts[0].split(":")[1];
        let entries;
        if (parts[1].includes(",")) {
          entries = parts[1].split(",").map((x) => x.split("="));
        } else {
          entries = [parts[1].split("=")];
        }
        data = Object.fromEntries(entries);
      } else {
        type = msg.split(":")[1];
      }
      if (!type)
        return;
      if (!this.listeners[type])
        return;
      for (const listener of this.listeners[type]) {
        listener(data);
      }
    });
  }
  on(type, listener) {
    if (!this.listeners[type])
      this.listeners[type] = [];
    Photino.sendRaw(`ev:${type}`);
    this.listeners[type].push(listener);
  }
  reset() {
    this.listeners = {};
    Photino.sendRaw(`ev:reset`);
  }
}
const win = window;
var Photino;
(function(Photino2) {
  Photino2.app = new AppModule();
  Photino2.io = new IOModule();
  Photino2.os = new OSModule();
  Photino2.window = new WindowModule();
  Photino2.events = new EventsModule();
  async function send(module, method, ...parameters) {
    const req = { module, method, parameters };
    const res = await sendRequest(req);
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result;
  }
  Photino2.send = send;
  function sendRequest(req) {
    var reqMsg = new PhotinoMessage(req);
    win.external.sendMessage(`api:${JSON.stringify(reqMsg)}`);
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        throw new Error("Request timed out");
      }, 1e4);
      win.external.receiveMessage((msg) => {
        if (!msg.startsWith("api:"))
          return;
        const resMsg = JSON.parse(msg.substring(4));
        if (resMsg.id === reqMsg.id) {
          clearTimeout(timeout);
          resolve(resMsg.data);
        }
      });
    });
  }
  async function sendRaw(value) {
    win.external.sendMessage(value);
  }
  Photino2.sendRaw = sendRaw;
})(Photino || (Photino = {}));
export { Photino, PhotinoModule };
