import { Router } from 'express';

const router = Router();

router.get('/v1/demo', (_req, res) => {
  res.status(200).json({ status: 'ok'});
});

export default router;