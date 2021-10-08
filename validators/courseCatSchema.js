import { object, string } from 'yup';

export const courseCatSchema = object({
	courseCategory: string().required().max(20)
});
