import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const schema = new Schema({
	userID: String,
	userName: String,
});

export default model('User', schema, 'users');
