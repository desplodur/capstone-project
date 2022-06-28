import {nanoid} from 'nanoid';
import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import Form from '../Form';

import StyledQuestionComponent from './styled';

export default function QuestionComponent({question}) {
	const [toggle, setToggle] = useState(true);
	const questions = useStore(state => state.questions);
	const addNewAnswer = useStore(state => state.addNewAnswer);

	const addAnswer = (event, id) => {
		event.preventDefault();
		const newQuestions = questions.map(question => {
			if (id === question.id) {
				const newAnswer = {
					id: nanoid(),
					answerText: event.target.inputField.value,
					answers: [],
				};
				question.answers = [...question.answers, newAnswer];
			}
			return question;
		});
		addNewAnswer(newQuestions);
	};

	return (
		<StyledQuestionComponent>
			<h4>{question.questionText}</h4>
			{!toggle && (
				<>
					<article>
						{question.answers.map(answer => {
							return <p key={answer.id}>{answer.answerText}</p>;
						})}
					</article>
					<article>
						<Form
							onSubmit={event => {
								addAnswer(event, question.id);
							}}
							placeholderText="Type in your answer..."
							submitButtonText={'->'}
						/>
					</article>
				</>
			)}
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{toggle ? 'Show answers' : 'Hide answers'}
			</button>
		</StyledQuestionComponent>
	);
}
