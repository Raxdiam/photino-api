import { PhotinoMessage } from './data';
import { AppModule, EventsModule, IOModule, OSModule, WindowModule } from './modules';
const win = window;
export var Photino;
(function (Photino) {
    Photino.app = new AppModule();
    Photino.io = new IOModule();
    Photino.os = new OSModule();
    Photino.window = new WindowModule();
    Photino.events = new EventsModule();
    async function send(module, method, ...parameters) {
        const req = { module, method, parameters };
        const res = await sendRequest(req);
        if (res.error) {
            throw new Error(res.error);
        }
        return res.result;
    }
    Photino.send = send;
    function sendRequest(req) {
        var reqMsg = new PhotinoMessage(req);
        win.external.sendMessage(`api:${JSON.stringify(reqMsg)}`);
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                throw new Error('Request timed out');
            }, 10000);
            win.external.receiveMessage((msg) => {
                if (!msg.startsWith('api:'))
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
    Photino.sendRaw = sendRaw;
})(Photino || (Photino = {}));
