import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Dialog from '../components/Dialog';
import Form from '../components/Form';
import Layout from '../components/Layout';
import UserLogin from '../components/UserLogin';
import {useStore} from '../hooks/useStore';
import withSession from '../session/withSession';

function HomePage({session}) {
	console.log(session);
	const addNewQuestion = useStore(state => state.addNewQuestion);
	const [open, setOpen] = useState(false);

	const createNewQuestion = event => {
		event.preventDefault();
		const newQuestion = {
			questionText: event.target.inputField.value,
			answers: [],
			userID: session.user.id,
			answered: false,
		};
		addNewQuestion(newQuestion);
		event.target.reset();
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h3>Is there something you did not understand?</h3>
			<h3>Ask your classmates!</h3>
			<Form
				onSubmit={event => {
					createNewQuestion(event);
					setOpen(!open);
					setTimeout(() => {
						setOpen(false);
					}, 1000);
				}}
				placeholderText={'...'}
				submitButtonText={'Ask your Question'}
			/>
			<>
				<Dialog open={open}>
					<h3>Question Created</h3>
				</Dialog>
			</>
		</Layout>
	);
}
export default withSession(HomePage, <UserLogin />);
