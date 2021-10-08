import dbConnect from '../../../utils/dbConnect';
import CourseArea from '../../../models/CourseArea';
import { courseAreaSchema } from '../../../validators/courseAreaSchema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../validators/validate';

const handler = async (req, res) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getCourseArea(req, res);
			break;
		case 'PUT':
			await createCourseArea(req, res);
			break;

		case 'DELETE':
			await deleteCourseArea(req, res);
			break;
	}
};

const getCourseArea = async (req, res) => {
	try {
		const courseArea = await CourseArea.find({});
		res.status(200).json(courseArea);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find courseArea' });
	}
};

const createCourseArea = async (req, res) => {
	console.log(req.body);
	const { courseArea } = req.body.values;

	const cat = await CourseArea.find({});

	try {
		if (cat) {
			await CourseArea.findOneAndUpdate(
				{ _id: cat[0]._id },
				{ $push: { courseArea } },
				{ useFindAndModify: true }
			);
			res.status(201).json({ message: 'Course Area created' });
		}
	} catch (error) {
		console.log(error);
		res.json({ err: 'Something went wrong' });
	}
};

const deleteCourseArea = async (req, res) => {};

export default withApiAuthRequired(validate(courseAreaSchema, handler));
