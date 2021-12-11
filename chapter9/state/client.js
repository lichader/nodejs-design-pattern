import { FailsafeSocket } from "./failsafeSocket.js";
const failesafeSocket = new FailsafeSocket({ port: 5000 });
setInterval(() => {
    failesafeSocket.send(process.memoryUsage());
}, 1000);
