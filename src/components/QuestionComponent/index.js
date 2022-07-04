import {nanoid} from 'nanoid';
import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import Button from '../Button';
import Form from '../Form';

import StyledQuestionComponent from './styled';

export default function QuestionComponent({question}) {
	const [toggle, setToggle] = useState(true);
	const [showEditQuestionForm, setShowEditQuestionForm] = useState(false);
	const questions = useStore(state => state.questions);
	const addNewAnswer = useStore(state => state.addNewAnswer);
	const activeUser = useStore(state => state.activeUser);

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
		event.target.reset();
	};

	const editQuestion = (event, id) => {
		event.preventDefault();
		const newQuestions = questions.map(question => {
			if (id === question.id) {
				question.questionText = event.target.inputField.value;
			}
			return question;
		});
		addNewAnswer(newQuestions);
		event.target.reset();
	};

	return (
		<StyledQuestionComponent>
			{showEditQuestionForm ? (
				<Form
					onSubmit={event => {
						editQuestion(event, question.id);
						setShowEditQuestionForm(false);
					}}
					placeholderText={question.questionText}
					submitButtonText={'->'}
				/>
			) : (
				<h4>{question.questionText}</h4>
			)}
			{!toggle && (
				<>
					{question.userID === activeUser.userID && (
						<Button
							editButtonSmall={true}
							onClick={() => {
								setShowEditQuestionForm(!showEditQuestionForm);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="img"
								width="4em"
								height="4em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								>
									<path strokeDasharray="20" strokeDashoffset="20" d="M3 21H21">
										<animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											dur="0.3s"
											values="20;0"
										/>
									</path>
									<path
										strokeDasharray="44"
										strokeDashoffset="44"
										d="M7 17V13L17 3L21 7L11 17H7"
									>
										<animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											begin="0.4s"
											dur="0.6s"
											values="44;0"
										/>
									</path>
									<path strokeDasharray="8" strokeDashoffset="8" d="M14 6L18 10">
										<animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											begin="1s"
											dur="0.2s"
											values="8;0"
										/>
									</path>
								</g>
							</svg>
						</Button>
					)}

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
			<Button
				toggleButton={true}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{toggle ? 'Show answers' : 'Hide answers'}
			</Button>
		</StyledQuestionComponent>
	);
}
