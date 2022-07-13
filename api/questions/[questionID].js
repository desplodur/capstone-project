import connectToMongodb from '../../backend/db/connect-to-mongodb';
import Question from '../../backend/models/Question';
export default async function handler(request, response) {
	const {questionID} = request.query;
	await connectToMongodb();

	if (request.method === 'PUT') {
		const newQuestion = Question(request.body);
		await Question.findByIdAndUpdate({_id: questionID}, newQuestion);
		return response.status(200).json({newQuestion});
	}
	return response.status(403).json({message: 'Error: request method does.'});
}
