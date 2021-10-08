import { object, string } from 'yup';

export const courseAreaSchema = object({
	courseArea: string().required().max(20)
});
