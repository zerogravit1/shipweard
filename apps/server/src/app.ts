import express, { type Express } from 'express';

export const createApp = (): Express => {
  const app = express();

  app.get('/api/status', (_request, response) => {
    response.status(200).json({
      status: 'ok',
    });
  });

  return app;
};
