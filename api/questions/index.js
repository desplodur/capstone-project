import connectToMongodb from '../../backend/db/connect-to-mongodb';
import Question from '../../backend/models/Question';

export default async function handler(request, response) {
	await connectToMongodb();
	if (request.method === 'GET') {
		const questions = await Question.find({});
		return response.status(200).json(questions);
	}

	if (request.method === 'POST') {
		const newQuestion = new Question(request.body);
		await newQuestion.save();
		return response.status(201).json({newQuestion});
	}
	return response.status(403).json({message: 'Error: request method does not exist.'});
}
