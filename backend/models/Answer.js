import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema({
	answerText: String,
});

export default model('Answer', schema, 'answers');
