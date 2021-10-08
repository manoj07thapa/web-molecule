import mongoose from 'mongoose';

const CourseCategorySchema = new mongoose.Schema({
	courseCategory: [ String ]
});

export default mongoose.models.CourseCategory || mongoose.model('CourseCategory', CourseCategorySchema);
