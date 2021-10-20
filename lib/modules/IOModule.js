import { PhotinoModule } from '../PhotinoModule';
export class IOModule extends PhotinoModule {
    name = 'io';
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
