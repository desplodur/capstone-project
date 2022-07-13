import connectToMongodb from '../../backend/lib/connect-to-mongodb';
import Answer from '../../backend/models/Answer';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'POST') {
		const newAnswer = new Answer(request.body);
		await newAnswer.save();
		return response.status(201).json(newAnswer);
	}
	return response.status(403).json({message: 'Error: request method does not exist.'});
}
