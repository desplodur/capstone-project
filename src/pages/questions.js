import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function QuestionPage() {
	const [questions, setQuestions] = useState([
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
	]);

	const addAnswer = (event, id) => {
		event.preventDefault();
		const index = questions.findIndex(question => {
			return id === question.id;
		});
		const newAnswer = {
			id: nanoid(),
			answerText: event.target.inputField.value,
		};
		const newQuestions = [...questions];
		newQuestions[index].answers = [...newQuestions[index].answers, newAnswer];
		setQuestions(newQuestions);
		//setQuestions(newQuestions);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">Question Area</title>
				<meta
					key="description"
					name="description"
					content="Here you can see all the Questions"
				/>
			</Helmet>
			<article>
				{questions.map(question => {
					return (
						<QuestionComponent key={nanoid} question={question} addAnswer={addAnswer} />
					);
				})}
			</article>
		</Layout>
	);
}
