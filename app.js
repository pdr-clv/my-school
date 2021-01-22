import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import quizRoutes from './backend/routes/quiz.routes.js';
import unitRoutes from './backend/routes/unit.routes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/v1/quiz', quizRoutes);
app.use('/api/v1/unit', unitRoutes);

//setting static webpages.
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(`${__dirname}/frontend/build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/frontend/build/index.html`);
  });
}

export default app;
