import { Router, Request, Response } from 'express';

const router = Router();
const path = require('path');

router.get('/login', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../../public/pages/login/index.html'));
});

router.post('/login', (req: Request, res: Response) => {
	const { username, password } = req.body;
	console.log(username, password);
	res.send('works!');
});

export { router };
