export class OnlineState {
    constructor(failesafeSocket) {
        this.failesafeSocket = failesafeSocket;
        this.hasDisconnected = false;
    }

    send(data) {
        this.failesafeSocket.queue.push(data);
        this._safeWrite(data);
    }

    _safeWrite(data) {
        this.failesafeSocket.socket.write(data, (err) => {
            if (!this.hasDisconnected && !err) {
                this.failesafeSocket.queue.shift();
            }
        });
    }

    activate() {
        this.hasDisconnected = false;
        for (const data of this.failesafeSocket.queue) {
            this._safeWrite(data);
        }

        this.failesafeSocket.socket.once("error", () => {
            this.hasDisconnected = true;
            this.failesafeSocket.changeState("offline");
        });
    }
}
