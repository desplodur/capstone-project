import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';
export default async function handler(request, response) {
	const {userID} = request.query;
	await connectToMongodb();

	if (request.method === 'PUT') {
		const newUser = User(request.body);
		await User.findByIdAndUpdate({_id: userID}, newUser);
		return response.status(200).json({newUser});
	}
	return response.status(403).json({message: 'Error: request method does.'});
}
