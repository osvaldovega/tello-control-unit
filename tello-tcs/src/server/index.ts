import express from 'express';
import http from 'http';
import io from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import socketServer from './socket';

const app =  express();
const server = http.createServer(app);
const ioServer = io(server);

const init = async () => {
  const { SERVER_PORT } = process.env;

  app.use(helmet());
  app.use(cors());

  await socketServer.createConnection(ioServer);

  server.listen(SERVER_PORT, () => {
    console.log(`Socket io server on port : ${SERVER_PORT}`);
  });
};

export default {
  init,
};
