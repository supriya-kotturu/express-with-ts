import { Router, Request, Response, NextFunction } from 'express';

// GOT REFACTORED USING DECORATORS : FILE NOT USED
export interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requiredAuth(req: Request, res: Response, next: NextFunction) {
	if (req.session && req.session.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('You are not permitted');
}

const router = Router();

router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect('/');
});

router.get('/protected', requiredAuth, (req: Request, res: Response) => {
	res.send('Welcome, Authenticated User');
});
router.get('/', (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn) {
		res.send('You are now Logged in!');
	} else {
		res.send('You need to login =(');
	}
});

function post(routeName: string) {
	return function (target: any, key: string, desc: PropertyDescriptor) {
		router.post(routeName, target[key]);
	};
}

function use(middleware: any) {
	return function (target: any, key: string, desc: PropertyDescriptor) {};
}

export { router };
