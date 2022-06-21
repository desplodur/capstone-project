import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function HomePage() {
	const questionArray = [
		{id: nanoid(), questionText: 'What is export default?'},
		{id: nanoid(), questionText: 'What does clean code means?'},
		{id: nanoid(), questionText: 'Why do we have to define keys?'},
	];

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			{questionArray.map(question => {
				console.log(question.id);
				return (
					<QuestionComponent key={question.id}>{question.questionText}</QuestionComponent>
				);
			})}
		</Layout>
	);
}
