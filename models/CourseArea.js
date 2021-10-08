import mongoose from 'mongoose';

const CourseAreaSchema = new mongoose.Schema({
	courseArea: [ String ]
});

export default mongoose.models.CourseArea || mongoose.model('CourseArea', CourseAreaSchema);
