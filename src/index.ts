import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(router).listen(3000, () => console.log('listening on 3000'));
