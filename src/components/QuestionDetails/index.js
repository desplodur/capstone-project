import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import {useStore} from '../../hooks/useStore';
import AnswerCard from '../AnswerCard';
import Button from '../Button';
import Form from '../Form';

import {StyledQuestionDetails} from './styled';
import {StyledContent} from './styled';

export default function QuestionDetails() {
	const [showEditQuestionForm, setShowEditQuestionForm] = useState(false);
	const questions = useStore(state => state.questions.data);
	const answers = useStore(state => state.answers.data);
	const setQuestion = useStore(state => state.setQuestion);
	const addNewAnswer = useStore(state => state.addNewAnswer);
	const activeUser = useStore(state => state.activeUser);
	const navigate = useNavigate();

	//const navigate = useNavigate();
	const {idFromUrl} = useParams();

	const question = questions.find(question => question._id === idFromUrl);

	const addAnswer = event => {
		event.preventDefault();
		const newAnswer = {
			answerText: event.target.inputField.value,
			questionID: question._id,
		};
		addNewAnswer(newAnswer);
		event.target.reset();
	};

	const editQuestion = event => {
		event.preventDefault();
		const newQuestion = question;
		newQuestion.questionText = event.target.inputField.value;
		setQuestion(question._id, newQuestion);
		event.target.reset();
	};
	const closeQuestion = () => {
		const newQuestion = question;
		newQuestion.answered = !question.answered;
		console.log(newQuestion.answered);
		setQuestion(question._id, newQuestion);
	};

	return (
		<StyledQuestionDetails>
			<StyledContent>
				<Button
					onClick={() => {
						navigate(-1);
					}}
				>
					Go Back
				</Button>
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
				<>
					{question.userID === activeUser._id && (
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
					<img
						id="statusIndicator"
						src={
							!question.answered
								? require('../../utils/icons/statusOpen.svg').default
								: require('../../utils/icons/statusClosed.svg').default
						}
						alt={!question.answered ? 'Open' : 'Closed'}
					/>
					<article>
						{answers.map(answer => {
							if (question._id === answer.questionID) {
								return (
									<AnswerCard key={answer._id}>{answer.answerText}</AnswerCard>
								);
							}
							return null;
						})}
					</article>
					<article>
						<Form
							onSubmit={event => {
								addAnswer(event);
							}}
							placeholderText="Type in your answer..."
							submitButtonText={'->'}
						/>
					</article>
				</>
			</StyledContent>
		</StyledQuestionDetails>
	);
}
