import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function HomePage() {
	const [questionArray, setQuestionArray] = useState([
		{questionText: 'What is export default?'},
		{questionText: 'What does clean code means?'},
		{questionText: 'Why do we have to define keys?'},
	]);

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
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
