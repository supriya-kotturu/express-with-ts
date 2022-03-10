import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requiredAuth(req: Request, res: Response, next: NextFunction) {
	if (req.session && req.session.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('You are not permitted');
}

@controller('')
class RootController {
	@get('/')
	getRoot(req: Request, res: Response): void {
		if (req.session && req.session.loggedIn) {
			res.send(`
            You are now Logged in!
            <a href="/auth/logout"> Logout</a>
            `);
		} else {
			res.send(`
            You need to login =(
            <a href="/auth/login">Login</a>
            `);
		}
	}

	@use(requiredAuth)
	@get('/protected')
	getProtected(req: Request, res: Response): void {
		res.send('Welcome, Authenticated User');
	}
}
