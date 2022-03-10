import { NextFunction, Request, Response } from 'express';
import { RequestWithBody } from '../routes/loginRoutes';
import { get, controller, use, post, bodyValidator } from './decorators';

const path = require('path');

// function logger(req: Request, res: Response, next: NextFunction) {
// 	console.log('request was made');
// 	next();
// }
@controller('/auth')
class LoginController {
	@get('/login')
	getLogin(req: Request, res: Response): void {
		res.sendFile(path.join(__dirname, '../../public/pages/login/index.html'));
	}

	@post('/login')
	@bodyValidator('username', 'password')
	postLogin(req: RequestWithBody, res: Response): void {
		const { username, password } = req.body;

		if (
			username &&
			password &&
			username === 'admin' &&
			password === '1234qaz'
		) {
			req.session = { loggedIn: true };
			res.redirect('/');
		} else {
			res.send('You need admin access to view this page');
		}
	}

	@get('/logout')
	getLogout(req: Request, res: Response): void {
		req.session = undefined;
		res.redirect('/');
	}
}
