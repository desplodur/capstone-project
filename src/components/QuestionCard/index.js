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
	const answers = useStore(state => state.answers);
	const setQuestions = useStore(state => state.setQuestions);
	const addNewAnswer = useStore(state => state.addNewAnswer);
	const activeUser = useStore(state => state.activeUser);

	const addAnswer = (event, id) => {
		event.preventDefault();
		const newAnswer = {
			id: nanoid(),
			answerText: event.target.inputField.value,
		};
		addNewAnswer(id, newAnswer);
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
		setQuestions(newQuestions);
		event.target.reset();
	};
	//complete
	const closeQuestion = id => {
		const newQuestions = questions.map(question => {
			if (id === question.id) {
				question.answered = !question.answered;
			}
			return question;
		});
		setQuestions(newQuestions);
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
			{!toggle ? (
				<>
					{question.userID === activeUser.userID && (
						<>
							<Button
								id="smallEditButton"
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
										<path
											strokeDasharray="20"
											strokeDashoffset="20"
											d="M3 21H21"
										>
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
										<path
											strokeDasharray="8"
											strokeDashoffset="8"
											d="M14 6L18 10"
										>
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
							<Button
								id="changeStatus"
								onClick={() => {
									closeQuestion(question.id);
								}}
							>
								<img
									src={
										!question.answered
											? require('../../utils/icons/check.svg').default
											: require('../../utils/icons/unCheck.svg').default
									}
									alt={!question.answered ? 'Open' : 'Closed'}
								/>
							</Button>
						</>
					)}
					<article>
						{answers.map(answer => {
							if (question.answers.find(Element => Element === answer.id)) {
								console.log(answer);
								return <p key={answer.id}>{answer.answerText}</p>;
							}
							return null;
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
			) : (
				<img
					id="statusIndicator"
					src={
						!question.answered
							? require('../../utils/icons/statusOpen.svg').default
							: require('../../utils/icons/statusClosed.svg').default
					}
					alt={!question.answered ? 'Open' : 'Closed'}
				/>
			)}
			<Button
				greyButton={true}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{toggle ? 'Show answers' : 'Hide answers'}
			</Button>
		</StyledQuestionComponent>
	);
}
