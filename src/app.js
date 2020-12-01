import express from 'express';
import routes from './routes/home'
const app = express();

app.use(routes)

export default app;
