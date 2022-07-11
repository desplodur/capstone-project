import connectToMongodb from '../backend/db/connect-to-mongodb';
import Question from '../backend/models/Question';
import Answer from '../backend/models/Answer';
import User from '../backend/models/User';
import {nanoid} from 'nanoid';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const questions = await Question.find({});
		const answers = await Answer.find({});
		const users = await User.find({});
		console.log(users);
		return response.status(200).json({questions, answers, users});
	}
	if (request.method === 'POST') {
		const newQuestion = new Question({
			id: nanoid,
			questionText: String,
			answers: [String],
			userID: String,
			answered: Boolean,
		});
		await Question.save();
		return response.status(201).json({data: newQuestion});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
