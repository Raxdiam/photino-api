export declare abstract class PhotinoModule {
    abstract name: string;
    protected send<T>(name: string, ...parameters: any[]): Promise<T>;
}
