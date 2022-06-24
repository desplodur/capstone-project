import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function QuestionPage() {
	const questions = [
		{id: nanoid(), questionText: 'What is export default?'},
		{id: nanoid(), questionText: 'What does clean code means?'},
		{id: nanoid(), questionText: 'Why do we have to define keys?'},
	];

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
						<QuestionComponent key={nanoid}>{question.questionText}</QuestionComponent>
					);
				})}
			</article>
		</Layout>
	);
}
