import dbConnect from '../../../utils/dbConnect';
import CourseCategory from '../../../models/CourseCategory';
import { courseCatSchema } from '../../../validators/courseCatSchema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../validators/validate';

const handler = async (req, res) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getCourseCategory(req, res);
			break;
		case 'PUT':
			await createCourseCategory(req, res);
			break;

		case 'DELETE':
			await deleteCourseCategory(req, res);
			break;
	}
};

const getCourseCategory = async (req, res) => {
	try {
		const courseCat = await CourseCategory.find({});
		res.status(200).json(prodCat);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find prodCat' });
	}
};

const createCourseCategory = async (req, res) => {
	const { courseCategory } = req.body.values;

	const cat = await CourseCategory.find({});

	try {
		if (cat) {
			await CourseCategory.findOneAndUpdate(
				{ _id: cat[0]._id },
				{ $push: { courseCategory } },
				{ useFindAndModify: true }
			);
			res.status(201).json({ message: 'Course category created' });
		}
	} catch (error) {
		res.json({ err: 'Something went wrong' });
	}
};

const deleteCourseCategory = async (req, res) => {};

export default withApiAuthRequired(validate(courseCatSchema, handler));
