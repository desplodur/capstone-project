import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema({
	questionText: String,
	userID: String,
	answered: Boolean,
});

export default model('Question', schema, 'questions');
