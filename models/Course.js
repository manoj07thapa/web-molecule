import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema(
	{
		category: {
			type: String
		},
		area: {
			type: String
		},
		lang: {
			type: String
		},
		title: {
			type: String,
			required: [ true, 'Please add a title' ],
			maxlength: [ 40, 'Title cannot be more than 40 characters' ]
		},
		subtitle: {
			type: String
		},
		syllabus: {
			type: Array,
			required: true
		},
		teacher: { type: Array },
		price: {
			type: Number,
			required: true
		},
		description: {
			type: String,
			required: true,
			maxlength: [ 1000, 'Description cannot be more than 1000 characters' ]
		},
		discount: {
			type: Number
		},
		files: {
			type: [ {} ],
			required: true
		},
		rating: {
			type: Number
		}
	},
	{
		timestamps: true
	}
);

CourseSchema.index(
	{
		title: 'text',
		category: 'text',
		description: 'text'
	},
	{
		weights: {
			title: 5,
			category: 5,
			description: 1
		}
	}
);

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
