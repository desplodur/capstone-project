import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Button from '../components/Button';
import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';
import {useStore} from '../hooks/useStore';

export default function QuestionPage() {
	const questions = useStore(state => state.questions);
	const [filter, setFilter] = useState(false);

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
			<Button
				greyButton={true}
				onClick={() => {
					setFilter(!filter);
				}}
			>
				{!filter ? `Show Closed` : `Show Open`}
			</Button>
			<article>
				{questions.map(question => {
					if (question.answered === filter) {
						return <QuestionComponent key={question.id} question={question} />;
					}
					return null;
				})}
			</article>
		</Layout>
	);
}
