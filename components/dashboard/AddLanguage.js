import { Formik, Form, Field } from 'formik';
import { courseLangSchema } from '../../validators/courseLangSchema';
import axios from 'axios';

export default function AddLanguage() {
	const initialValues = {
		courseLanguage: ''
	};

	const onSubmit = async (values, actions) => {
		try {
			await axios.post('/api/course/courseLanguage', { values });
			actions.resetForm();
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};
	return (
		<div className="mt-7 max-w-md mx-auto">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={courseLangSchema}>
				{({ errors, isSubmitting, values }) => (
					<Form>
						<label htmlFor="courseLanguage w-full">
							<span className="block text-lg font-semibold text-gray-500 mb-2">Add course Language</span>
							<Field
								name="courseLanguage"
								type="text"
								id="courseLanguage"
								className={`${errors.courseLanguage
									? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
									: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
							/>
							<div className="text-red-500 text-xs mt-1">
								{errors.courseLanguage && errors.courseLanguage}
							</div>
						</label>

						<div className="mt-2  text-right ">
							<button
								type="submit"
								className="uppercase tracking-wider focus:outline-none px-4 py-2 bg-gray-900 hover:bg-gray-700 text-medium text-white rounded-md"
							>
								Add course language
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
