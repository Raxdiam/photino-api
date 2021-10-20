import { PhotinoModule } from '../PhotinoModule';
export declare class AppModule extends PhotinoModule {
    readonly name: string;
    exit(exitCode: number): Promise<void>;
    cwd(): Promise<string>;
}
