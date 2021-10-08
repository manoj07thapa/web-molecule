import { Formik, Form, Field } from 'formik';
import { courseCatSchema } from '../../validators/courseCatSchema';
import axios from 'axios';

export default function AddCategory() {
	const initialValues = {
		courseCategory: ''
	};

	const onSubmit = async (values, actions) => {
		try {
			await axios.put('/api/course/courseCategory', { values });
			actions.resetForm();
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};
	return (
		<div className="mt-7 max-w-md mx-auto">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={courseCatSchema}>
				{({ errors, isSubmitting, values }) => (
					<Form>
						<label htmlFor="courseCategory w-full">
							<span className="block text-lg font-semibold text-gray-500 mb-2">Add course category</span>
							<Field
								name="courseCategory"
								type="text"
								id="courseCategory"
								className={`${errors.courseCategory
									? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
									: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
							/>
							<div className="text-red-500 text-xs mt-1">
								{errors.courseCategory && errors.courseCategory}
							</div>
						</label>

						<div className="mt-2  text-right ">
							<button
								type="submit"
								className="uppercase tracking-wider focus:outline-none px-4 py-2 bg-gray-900 hover:bg-gray-700 text-medium text-white rounded-md"
							>
								Add course category
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
