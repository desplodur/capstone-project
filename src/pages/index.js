import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Form from '../components/Form';
import Layout from '../components/Layout';

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
			questionText: event.target.inputField.value,
		};
		setQuestions([...questions, newQuestion]);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<label>
				<h2>Is there something you did not understand?</h2>
				<h3>Ask your classmates!</h3>
				<Form
					onSubmit={createNewQuestion}
					placeholderText={'...'}
					submitButtonText={'Ask your Question'}
				/>
			</label>
		</Layout>
	);
}
