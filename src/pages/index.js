import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';

export default function HomePage() {
	const [questionArray, setQuestionArray] = useState([
		{questionText: 'What doe export default?'},
		{questionText: 'What doe export default?'},
		{questionText: 'What doe export default?'},
	]);

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Home</h1>
			{questionArray.map(question => {
				return <QuestionComponent key={nanoid}>{question.questionText}</QuestionComponent>;
			})}
		</Layout>
	);
}
