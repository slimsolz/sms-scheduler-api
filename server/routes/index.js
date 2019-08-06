import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // res.redirect('/api-docs');
  res.json({
    message: 'welcome to sms scheduler',
  });
});

router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint not found',
  });
});

export default router;
