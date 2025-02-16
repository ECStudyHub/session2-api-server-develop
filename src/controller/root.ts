import http from "http";

export const rootController = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const jsonData = JSON.stringify({ message: "server check" });

  response.writeHead(200, { "content-type": "application/json" });
  response.end(jsonData);
};
