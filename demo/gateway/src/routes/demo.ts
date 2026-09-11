import { Router } from 'express';

import { getDemo } from '../client/demo-service-client.ts';
import { getGoDemo } from '../client/go-service-client.ts';

const router = Router();

router.get('/v1/demo', async (_req, res) => {
  const response = await getDemo();

  res.status(200).json(response);
});

router.get('/v1/go/demo', async (_req, res) => {
  const response = await getGoDemo();

  res.status(200).json(response);
});

export default router;
