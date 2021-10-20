import { PhotinoModule } from '../PhotinoModule';
import { PhotinoEvent, PhotinoLocationEvent, PhotinoSizeEvent } from '../data/PhotinoEvent';
interface PhotinoEventMap {
    size: PhotinoSizeEvent;
    location: PhotinoLocationEvent;
    closing: PhotinoEvent;
    focusIn: PhotinoEvent;
    focusOut: PhotinoEvent;
    maximize: PhotinoEvent;
    minimize: PhotinoEvent;
    restore: PhotinoEvent;
}
export declare class EventsModule extends PhotinoModule {
    private listeners;
    readonly name: string;
    constructor();
    on<K extends keyof PhotinoEventMap>(type: K, listener: (e: PhotinoEventMap[K]) => any): void;
    reset(): void;
}
export {};
