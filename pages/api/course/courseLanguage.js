import dbConnect from '../../../utils/dbConnect';
import CourseLanguage from '../../../models/CourseLanguage';
import { courseLangSchema } from '../../../validators/courseLangSchema';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { validate } from '../../../validators/validate';

const handler = async (req, res) => {
	dbConnect();
	switch (req.method) {
		case 'GET':
			await getCourseLanguage(req, res);
			break;
		case 'POST':
			await createCourseLanguage(req, res);
			break;

		case 'DELETE':
			await deleteCourseLanguage(req, res);
			break;
	}
};

const getCourseLanguage = async (req, res) => {
	try {
		const courseLang = await CourseLanguage.find({});
		res.status(200).json(courseLang);
	} catch (error) {
		res.status(400).json({ success: false, error: 'Sorry couldnot find prodCat' });
	}
};

const createCourseLanguage = async (req, res) => {
	const { courseLanguage } = req.body.values;

	const cat = await CourseLanguage.find({});

	try {
		if (cat) {
			await CourseLanguage.findOneAndUpdate(
				{ _id: cat[0]._id },
				{ $push: { courseLanguage } },
				{ useFindAndModify: true }
			);
			res.status(201).json({ message: 'Course Language created' });
		}
	} catch (error) {
		res.json({ err: 'Something went wrong' });
	}
};

const deleteCourseLanguage = async (req, res) => {};

export default withApiAuthRequired(validate(courseLangSchema, handler));
