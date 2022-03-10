import { Request, Response } from 'express';
import { get, controller } from './decorators';

const path = require('path');

@controller('/auth')
class LoginController {
	@get('/login')
	getLogin(req: Request, res: Response): void {
		res.sendFile(path.join(__dirname, '../../public/pages/login/index.html'));
	}
}
