import jsonServer from "json-server";
import url from "url";
import path from "path";

import db from "./mocks/db.js";
import getPlaylists from "./mocks/getPlaylists.js";

const addDelay = (delay = 0) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get("/playlists", async (req, res) => {
  await addDelay(200);
  await res.send(getPlaylists);
});

server.listen(3004, () => {
  console.log(`JSON Server is running: http://localhost:3004`);
});
