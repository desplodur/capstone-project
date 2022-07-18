import connectToMongodb from '../backend/lib/connect-to-mongodb';
import Answer from '../backend/models/Answer';
import Question from '../backend/models/Question';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const questions = await Question.find({});
		const answers = await Answer.find({});
		return response.status(200).json({questions, answers});
	}
	return response.status(403).json({message: 'Error: request method does not exist.'});
}
