import {nanoid} from 'nanoid';

const questionDatabase = [
	{
		id: nanoid(),
		questionText: 'What is export default?',
		answers: [
			{id: nanoid(), answerText: 'its ...'},
			{id: nanoid(), answerText: 'it means that ...'},
		],
	},
	{
		id: nanoid(),
		questionText: 'What does clean code means?',
		answers: [{id: nanoid(), answerText: 'its ...'}],
	},
	{
		id: nanoid(),
		questionText: 'Why do we have to define keys?',
		answers: [],
	},
];

export default questionDatabase;
