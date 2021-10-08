import { Formik, Form, Field } from 'formik';
import { courseAreaSchema } from '../../validators/courseAreaSchema';
import axios from 'axios';

export default function AddArea() {
	const initialValues = {
		courseArea: ''
	};

	const onSubmit = async (values, actions) => {
		console.log(values);
		try {
			await axios.put('/api/course/courseArea', { values });
			actions.resetForm();
		} catch (error) {
			if (error.response) {
				actions.setFieldError(error.response.data.params.path, error.response.data.message);
			}
		}
	};
	return (
		<div className="mt-7 max-w-md mx-auto">
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={courseAreaSchema}>
				{({ errors, isSubmitting, values }) => (
					<Form>
						<label htmlFor="courseArea w-full">
							<span className="block text-lg font-semibold text-gray-500 mb-2">Add course Area</span>
							<Field
								name="courseArea"
								type="text"
								id="courseArea"
								className={`${errors.courseArea
									? 'ring-1 ring-red-500 placeholder-gray-300 w-full  border-red-500 rounded-md shadow  focus:outline-none'
									: 'rounded-md placeholder-gray-300 w-full  focus:outline-none focus:border-purple-500 focus:ring-purple-500'}`}
							/>
							<div className="text-red-500 text-xs mt-1">{errors.courseArea && errors.courseArea}</div>
						</label>

						<div className="mt-2  text-right ">
							<button
								type="submit"
								className="uppercase tracking-wider focus:outline-none px-4 py-2 bg-gray-900 hover:bg-gray-700 text-medium text-white rounded-md"
							>
								Add course Area
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
