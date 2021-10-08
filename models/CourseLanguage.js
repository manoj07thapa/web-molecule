import mongoose from 'mongoose';

const CourseLanguageSchema = new mongoose.Schema({
	courseLanguage: [ String ]
});

export default mongoose.models.CourseLanguage || mongoose.model('CourseLanguage', CourseLanguageSchema);
