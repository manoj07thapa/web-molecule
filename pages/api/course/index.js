import dbConnect from '../../../utils/dbConnect';
import Course from '../../../models/Course';
import { courseSchema } from '../../../validators/courseSchema';
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';
import { validate } from '../../../validators/validate';

const handler = async (req, res) => {
	dbConnect();

	switch (req.method) {
		case 'POST':
			await createCourse(req, res);
			break;
		case 'PUT':
			await editCourse(req, res);
			break;
		case 'DELETE':
			await deleteCourse(req, res);
			break;
	}
};

const createCourse = async (req, res) => {
	console.log(req.body.values);
	const {
		category,
		area,
		lang,
		title,
		subtitle,
		syllabus,
		discount,
		teacher,
		price,
		description,
		files,
		rating
	} = req.body.values;
	try {
		await new Course({
			category,
			area,
			lang,
			title,
			subtitle,
			syllabus,
			discount,
			teacher,
			price,
			description,
			files,
			rating
		}).save();
		res.status(201).json({ message: 'Course created' });
	} catch (error) {
		console.log(error);
		res.json({ err: 'Something went wrong' });
	}
};

const editCourse = async (req, res) => {};

const deleteCourse = async (req, res) => {};

export default withApiAuthRequired(validate(courseSchema, handler));
