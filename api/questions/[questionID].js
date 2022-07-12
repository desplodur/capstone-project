import connectToMongodb from '../../backend/db/connect-to-mongodb';
import Question from '../../backend/models/Question';
export default async function handler(request, response) {
	const {questionID} = request.query;

	await connectToMongodb();

	if (request.method === 'PUT') {
		const AnswerID = Question(request.body._id);
		await Question.findByIdAndUpdate({id: questionID}, {answers: AnswerID});
		return response.status(200).json({AnswerID});
	}
	return response.status(403).json({message: 'Error: request method does.'});
}
