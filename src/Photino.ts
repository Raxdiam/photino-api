import { PhotinoMessage, PhotinoRequest, PhotinoResponse } from './data';
import { AppModule, EventsModule, IOModule, OSModule, WindowModule } from './modules';

declare global {
  interface External {
    sendMessage: (message: string) => void;
    receiveMessage: (delegate: (message: string) => void) => void;
  }

  type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T];
  type Defaults<T> = Required<Pick<T, OptionalKeys<T>>>;
}

const win = window;

export namespace Photino {
  export const app = new AppModule();
  export const io = new IOModule();
  export const os = new OSModule();
  export const window = new WindowModule();
  export const events = new EventsModule();

  export async function send<TReturn>(module: string, method: string, ...parameters: any[]): Promise<TReturn> {
    const req: PhotinoRequest = { module, method, parameters };
    const res = await sendRequest(req);
    if (res.error) {
      throw new Error(res.error);
    }
    return res.result as TReturn;
  }

  function sendRequest(req: PhotinoRequest): Promise<PhotinoResponse> {
    var reqMsg = new PhotinoMessage(req);
    win.external.sendMessage(`api:${JSON.stringify(reqMsg)}`);

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        throw new Error('Request timed out');
      }, 10000);

      win.external.receiveMessage((msg) => {
        if (!msg.startsWith('api:')) return;
        const resMsg = JSON.parse(msg.substring(4)) as PhotinoMessage;
        if (resMsg.id === reqMsg.id) {
          clearTimeout(timeout);
          resolve(resMsg.data);
        }
      });
    });
  }

  export async function sendRaw(value: string) {
    win.external.sendMessage(value);
  }
}
