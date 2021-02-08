import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  const NAMESPACE = 'Sample Controller';
  logger.info(NAMESPACE, 'Sample healthcheck route called');

  return res.status(200).json({
    message: 'pong',
  });
};

export default { sampleHealthCheck };
