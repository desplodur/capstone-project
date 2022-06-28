import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';
import {useStore} from '../hooks/useStore';

export default function QuestionPage() {
	const questions = useStore(state => state.questions);

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
					return <QuestionComponent key={question.id} question={question} />;
				})}
			</article>
		</Layout>
	);
}
