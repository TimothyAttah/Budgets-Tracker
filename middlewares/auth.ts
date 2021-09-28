const jwtTokens = require('jsonwebtoken');

const authentication = (req: any, res: any, next: any) => {
	try {
		const { authorization } = req.headers;
		if (!authorization)
			return res.status(403).json({ error: 'Not Authorized' });
		const payload = jwtTokens.verify(authorization, process.env.JWT_SECRET);
		req.user = payload.user;
		next();
	} catch (err) {
		console.error(err);
		res.status(403).json({ error: 'Not Authorized' });
	}
};

module.exports = authentication;
