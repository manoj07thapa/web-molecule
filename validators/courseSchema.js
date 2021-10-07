import { array, object, string, number, boolean } from 'yup';

export const courseSchema = object({
	category: string(),
	area: string(),
	lang: string(),
	title: string().required().max(30),
	subtitle: string().required().max(30),
	syllabus: array().of(string().max(20)),
	discount: number(),
	price: number().required().min(1),
	description: string().required().max(300),
	teacher: array(),
	files: array(
		object({
			url: string().required()
		})
	),
	rating: number().max(5)
});
