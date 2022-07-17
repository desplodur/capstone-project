import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();
	if (request.method === 'GET') {
		const users = await User.find({});
		return response.status(200).json({users});
	}
	if (request.method === 'POST') {
		const newUser = new User(request.body);
		await newUser.save();
		return response.status(201).json({newUser});
	}
	return response.status(403).json({message: 'Error: request method does not exist.'});
}
