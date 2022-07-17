import {useState} from 'react';
import {Helmet} from 'react-helmet';

import {useAddNewQuestion} from '../../hooks/useQuery';
import {useStore} from '../../hooks/useStore';
import Dialog from '../Dialog';
import Form from '../Form';

import StyledCreateQuestion from './styled';

export default function CreateQuestion() {
	const activeUser = useStore(state => state.activeUser);
	const [open, setOpen] = useState(false);
	const {mutate: addNewQuestion} = useAddNewQuestion();

	const createNewQuestion = event => {
		event.preventDefault();
		const newQuestion = {
			questionText: event.target.inputField.value,
			answers: [],
			userID: activeUser._id,
			answered: false,
		};
		addNewQuestion(newQuestion);
		event.target.reset();
	};

	return (
		<StyledCreateQuestion>
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
		</StyledCreateQuestion>
	);
}
