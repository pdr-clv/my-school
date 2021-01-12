import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//setting static webpages.
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(`${__dirname}/frontend/build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/frontend/build/index.html`);
  });
}

export default app;
