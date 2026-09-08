import { Router } from 'express';

import { getDemo } from '../services/demo-service.ts';

const router = Router();

router.get('/v1/demo', async (_req, res) => {
  const response = await getDemo();

  res.status(200).json(response);
});

export default router;
