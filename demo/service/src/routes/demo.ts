import { Router } from 'express';

const router = Router();

router.get('/v1/demo', (_req, res) => {
  const response = {
    service: 'demo-service',
    message: 'Hello from the demo service',
  }

  res.status(200).json(response);
});

export default router;