import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import Button from '../components/Button';
import Dialog from '../components/Dialog';
import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionCard';
import UserLogin from '../components/UserLogin';
import {useStore} from '../hooks/useStore';
import withSession from '../session/withSession';

function QuestionPage({session}) {
	const questions = useStore(state => state.questions.data);
	const fetchData = useStore(state => state.fetchData);
	const [filter, setFilter] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			fetchData();
		}, 1000);
		return () => clearInterval(intervalId);
	});

	questions.sort((a, b) => Number(a.answered) - Number(b.answered));
	const filteredQuestions = filter
		? questions.filter(question => question.userID === session.id)
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
			<>
				<Button
					greyButton={true}
					onClick={() => {
						setFilter(!filter);
					}}
				>
					{filter ? `Show All Questions` : `Show My Questions`}{' '}
					<svg width="24p" height="24px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M3.47 5C3.25 5 3.04 5.08 2.87 5.21C2.43 5.55 2.35 6.18 2.69 6.61L2.69 6.62L7 12.14V18.05L10.64 21.71C11 22.1 11.66 22.1 12.05 21.71L12.05 21.71C12.44 21.32 12.44 20.69 12.06 20.3L9 17.22V11.45L4.27 5.39C4.08 5.14 3.78 5 3.47 5M21.62 3.22C21.43 3.08 21.22 3 21 3H7C6.78 3 6.57 3.08 6.38 3.22C5.95 3.56 5.87 4.19 6.21 4.62L11 10.75V15.87C10.96 16.16 11.06 16.47 11.29 16.7L15.3 20.71C15.69 21.1 16.32 21.1 16.71 20.71C16.94 20.5 17.04 20.18 17 19.88V10.75L21.79 4.62C22.13 4.19 22.05 3.56 21.62 3.22M15 10.05V17.58L13 15.58V10.06L9.04 5H18.96L15 10.05Z"

						/>
					</svg>
				</Button>
				<article>
					{filteredQuestions.map(question => {
						console.log(question.userID === session.user.id);
						return (
							<QuestionComponent
								key={question._id}
								ownedQuestion={question.userID === session.user.id ? true : false}
								question={question}
							/>
						);
					})}
				</article>
			</>
		</Layout>
	);
}

export default withSession(QuestionPage, <UserLogin />);
