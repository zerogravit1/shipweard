import { Router } from 'express';

import type { DemoResponse } from '../model/demo-response.ts';

const router = Router();

router.get('/v1/demo', (_req, res) => {
  const response: DemoResponse = {
    service: 'demo-service',
    message: 'Hello from the demo service',
  }

  res.status(200).json(response);
});

export default router;