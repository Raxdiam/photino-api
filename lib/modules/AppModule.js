import { PhotinoModule } from '../PhotinoModule';
export class AppModule extends PhotinoModule {
    name = 'app';
    exit(exitCode) {
        return this.send(this.exit.name, exitCode);
    }
    cwd() {
        return this.send(this.cwd.name);
    }
}
