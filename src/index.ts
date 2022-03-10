import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ['app-key-for-session-encryption'] }));

app.use('/public', express.static(path.join(__dirname, '../public')));

app
	.use(AppRouter.getInstance())
	.listen(3000, () => console.log('Listening on 3000'));
