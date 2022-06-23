import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionForm from '../components/QuestionForm';

export default function HomePage() {
	const [questions, setQuestions] = useState([
		{id: nanoid(), questionText: 'What is export default?'},
		{id: nanoid(), questionText: 'What does clean code means?'},
		{id: nanoid(), questionText: 'Why do we have to define keys?'},
	]);

	const createNewQuestion = event => {
		event.preventDefault();
		const newQuestion = {
			id: nanoid(),
			questionText: event.target.questionTextInput.value,
		};
		setQuestions([...questions, newQuestion]);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>

			<QuestionForm onSubmit={createNewQuestion} />
		</Layout>
	);
}
