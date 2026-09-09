import { createApp } from './app.ts';

const port = Number(process.env.PORT ?? 3002);

const app = createApp();

app.listen(port, () => {
  console.log('Demo app is running');
});
