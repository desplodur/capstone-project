import {nanoid} from 'nanoid';
import React from 'react';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';
import QuestionForm from '../components/QuestionForm';

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

			<QuestionForm onSubmitFunction={createNewQuestion} />
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
