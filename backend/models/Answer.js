import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema({
	answerText: String,
	questionID: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
});

export default model('Answer', schema, 'answers');
