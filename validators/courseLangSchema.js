import { object, string } from 'yup';

export const courseLangSchema = object({
	courseLanguage: string().required().max(20)
});
