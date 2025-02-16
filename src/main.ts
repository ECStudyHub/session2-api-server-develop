import http from "http";
import { rootController, sumController } from "./controller";

const SERVER = http.createServer();
const HOSTNAME = "0.0.0.0";
const PORT = 5678;

SERVER.on("request", (request, response) => {
  const URL = request.url;

  if (URL === "/") {
    rootController(request, response);
  }

  if (URL === "/sum") {
    sumController(request, response);
  }
});

SERVER.listen(HOSTNAME, PORT, () => {
  console.log(`listen to requests ${HOSTNAME} ${PORT}`);
});
