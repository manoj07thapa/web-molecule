export function validate(schema, handler) {
	return async (req, res) => {
		if ([ 'POST', 'PUT' ].includes(req.method || '')) {
			try {
				await schema.validate(req.body.values);
			} catch (err) {
				return res.status(400).json(err);
			}
		}
		handler(req, res);
	};
}
