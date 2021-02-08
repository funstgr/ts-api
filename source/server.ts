/* eslint-disable @typescript-eslint/no-unused-vars */
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './config/logger';
import config from './config/config';
import sampleRoutes from './routes/sample';

const NAMESPACE = 'Server';
const router = express();

/** Logging the request */
router.use((req, res, next) => {
  logger.info(NAMESPACE, `METHOD - [$(req.method)], URL - [${req.url}] IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logger.info(NAMESPACE, `METHOD - [$(req.method)], URL - [${req.url}] IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  });
  next();
});

/** Parse the request */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Rules of the API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-METHOD', 'GET PATCH DELETE POST PUT');
  }
  next();
});

/** Routes */

router.use('/sample', sampleRoutes);

/** Error Handling */
router.use((req, res, next) => {
  const error = new Error('not found');

  return res.status(404).json({
    message: error.message,
  });
});

/** Create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.SERVER.port, () => logger.info(NAMESPACE, `Server running on ${config.SERVER.hostname}: ${config.SERVER.port}`));
