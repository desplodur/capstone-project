import {nanoid} from 'nanoid';

const dataBase = {
	questions: [],
	answers: [],
	users: [
		{
			userID: nanoid(),
			userName: 'Laurenz',
		},
		{
			userID: nanoid(),
			userName: 'Theo',
		},
	],
};

export default dataBase;
