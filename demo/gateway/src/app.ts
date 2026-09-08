import express, { type Express } from 'express';
import demoRouter from './routes/demo.ts';

export const createApp = (): Express => {
  const app = express();

  app.use('/api', demoRouter);

  return app;
}