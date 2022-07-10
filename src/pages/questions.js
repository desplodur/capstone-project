import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Button from '../components/Button';
import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionCard';
import {useStore} from '../hooks/useStore';

export default function QuestionPage() {
	const questions = useStore(state => state.questions);
	const activeUser = useStore(state => state.activeUser);
	const [filter, setFilter] = useState(false);
	questions.data.sort((a, b) => Number(a.answered) - Number(b.answered));

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
			<Test />
			<Button
				greyButton={true}
				onClick={() => {
					setFilter(!filter);
				}}
			>
				{filter ? `Show All Questions` : `Show My Questions`}
			</Button>
			<article>
				{questions.data.map(question => {
					if (filter ? question.userID === activeUser.userID : true) {
						return (
							<QuestionComponent
								key={question.id}
								ownedQuestion={question.userID === activeUser.userID ? true : false}
								question={question}
							/>
						);
					}
					return null;
				})}
			</article>
		</Layout>
	);
}

function Data({data}) {
	return <pre>{JSON.stringify(data, null, 4)}</pre>;
}

function Test() {
	const questions = useStore(state => state.questions);
	const answers = useStore(state => state.answers);
	const users = useStore(state => state.users);
	const fetchData = useStore(state => state.fetchData);

	return (
		<>
			<button
				type="button"
				onClick={() => {
					fetchData();
				}}
			>
				Fetch Data
			</button>

			{questions.error && <div>Questions: {questions.error.message}</div>}
			{answers.error && <div>Answers: {answers.error.message}</div>}
			{users.error && <div>Users: {users.error.message}</div>}
			<Data data={questions} />
			<Data data={answers} />
			<Data data={users} />
		</>
	);
}
