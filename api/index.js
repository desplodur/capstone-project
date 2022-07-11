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
		console.log(users);
		return response.status(200).json({questions, answers, users});
	}
	if (request.method === 'POST') {
		console.log(request.body);
		const newQuestion = new Question(request.body);
		console.log(newQuestion);
		await newQuestion.save();
		return response.status(201).json({data: newQuestion});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
