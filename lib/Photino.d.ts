import { AppModule, EventsModule, IOModule, OSModule, WindowModule } from './modules';
declare global {
    interface External {
        sendMessage: (message: string) => void;
        receiveMessage: (delegate: (message: string) => void) => void;
    }
    type OptionalKeys<T> = {
        [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
    }[keyof T];
    type Defaults<T> = Required<Pick<T, OptionalKeys<T>>>;
}
export declare namespace Photino {
    const app: AppModule;
    const io: IOModule;
    const os: OSModule;
    const window: WindowModule;
    const events: EventsModule;
    function send<TReturn>(module: string, method: string, ...parameters: any[]): Promise<TReturn>;
    function sendRaw(value: string): Promise<void>;
}
