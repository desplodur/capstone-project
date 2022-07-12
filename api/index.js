import connectToMongodb from '../backend/db/connect-to-mongodb';
import Question from '../backend/models/Question';
import Answer from '../backend/models/Answer';
import User from '../backend/models/User';
export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const questions = await Question.find({});
		const answers = await Answer.find({});
		const users = await User.find({});
		return response.status(200).json({questions, answers, users});
	}
	if (request.method === 'POST') {
		const newQuestion = new Question(request.body);
		await newQuestion.save();
		return response.status(201).json({newQuestion});
	}
	if (request.method === 'UPDATE') {
		const updatedQuestion = await Question.findByIdAndUpdate(request.body.id, {
			$set: request.body,
		});
		return response.status(200).json({updatedQuestion});
	}

	return response.status(403).json({message: 'Error: request method not allowed.'});
}
