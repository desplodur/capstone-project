import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import Button from '../components/Button';
import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionCard';
import {useStore} from '../hooks/useStore';

export default function QuestionPage() {
	const questions = useStore(state => state.questions);
	const activeUser = useStore(state => state.activeUser);
	const fetchData = useStore(state => state.fetchData);
	const [filter, setFilter] = useState(false);

	useEffect(() => {
		fetchData();
	}),
		[];

	questions.data.sort((a, b) => Number(a.answered) - Number(b.answered));
	const filteredQuestions = filter
		? questions.data.filter(question => question.userID === activeUser.userID)
		: questions;

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
				{filter ? `Show All Questions` : `Show My Questions`}
			</Button>
			<article>
				{filteredQuestions.data.map(question => {
					return (
						<QuestionComponent
							key={question.id}
							ownedQuestion={question.userID === activeUser.userID ? true : false}
							question={question}
						/>
					);
				})}
			</article>
		</Layout>
	);
}
