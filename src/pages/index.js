import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function HomePage() {
	const [questionArray, setQuestionArray] = useState([
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
		const newQuestionArray = [...questionArray, newQuestion];
		setQuestionArray(newQuestionArray);
		console.log(questionArray);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<article>
				<h2>Is there something you did not understand?</h2>
				<h3>Ask your classmates!</h3>
				<form onSubmit={createNewQuestion}>
					<input
						type="text"
						name="questionTextInput"
						placeholder="...what is meant by clean code?"
					></input>
					<input type="submit" value="Ask your Question"></input>
				</form>
			</article>
			<article>
				{questionArray.map(question => {
					return (
						<QuestionComponent key={nanoid}>{question.questionText}</QuestionComponent>
					);
				})}
			</article>
		</Layout>
	);
}
