import http from "http";
import userPost from "../../data/input/user.json";

export const sumController = (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const allUserPostCount = userPost.reduce((total, user) => {
    total += user.post_count;
    return total;
  }, 0);

  const jsonData = JSON.stringify({ sum: allUserPostCount });

  response.writeHead(200, { "content-type": "application/json" });
  response.end(jsonData);
};
