import express from 'express';
import customResponses from './middlewares/customResponses';
import router from './config/routes';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(customResponses);

app.use(bodyParser.urlencoded());

app.use(router);

app.use((req, res) => {
  res.notFound();
});

app.listen(port);
