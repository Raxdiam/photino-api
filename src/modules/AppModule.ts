import { PhotinoModule } from '../PhotinoModule';

export class AppModule extends PhotinoModule {
  readonly name: string = 'app';

  exit(exitCode: number): Promise<void> {
    return this.send(this.exit.name, exitCode);
  }

  cwd(): Promise<string> {
    return this.send(this.cwd.name);
  }
}
