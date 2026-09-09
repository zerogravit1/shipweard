import express, { type Express } from 'express';
import demoRouter from './routes/demo.ts';
import healthRouter from './routes/health.ts';

export const createApp = (): Express => {
  const app = express();

  app.use('/api', demoRouter);
  app.use(healthRouter);

  return app;
};
