import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import Form from '../components/Form';
import Layout from '../components/Layout';
import {useStore} from '../hooks/useStore';

export default function HomePage() {
	const addNewQuestion = useStore(state => state.addNewQuestion);

	const createNewQuestion = event => {
		event.preventDefault();
		const newQuestion = {
			id: nanoid(),
			questionText: event.target.inputField.value,
			answers: [],
		};
		addNewQuestion(newQuestion);
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
