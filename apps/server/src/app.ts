import express, { type Express } from 'express';

import type { StatusResponse } from '@shipweard/model';

export const createApp = (): Express => {
  const app = express();

  app.get('/api/status', (_request, response) => {
    const status: StatusResponse = {
      status: 'ok',
    };

    response.status(200).json(status);
  });

  return app;
};
