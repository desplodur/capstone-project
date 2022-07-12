import connectToMongodb from '../../backend/db/connect-to-mongodb';
import Question from '../../backend/models/Question';
export default async function handler(request, response) {
	const {questionID} = request.query;

	await connectToMongodb();
	/*
	if (request.method === 'PUT') {
		const answerID = Question(request.body._id);

		console.log(answserID);
		await Question.findByIdAndUpdate({_id: questionID}, {answers: answerID});
		return response.status(200).json({answerID});
	}
	return response.status(403).json({message: 'Error: request method does.'});*/
}
