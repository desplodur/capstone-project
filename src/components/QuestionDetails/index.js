import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import {
	useAddNewAnswer,
	useGetQuestions,
	useSetQuestion,
	useGetAnswers,
} from '../../hooks/useQuery';
import {useStore} from '../../hooks/useStore';
import AnswerCard from '../AnswerCard';
import Button from '../Button';
import Form from '../Form';

import {StyledQuestionDetails} from './styled';
import {StyledNavigation} from './styled';
import {StyledQuestionBody} from './styled';
import {StyledQuestionHead} from './styled';
import {StyledImage} from './styled';

export default function QuestionDetails() {
	const [showEditQuestionForm, setShowEditQuestionForm] = useState(false);
	const activeUser = useStore(state => state.activeUser);

	const navigate = useNavigate();
	const {idFromUrl} = useParams();
	const {mutate: addNewAnswer} = useAddNewAnswer();
	const {mutate: setQuestion} = useSetQuestion();

	const {isLoadingQuestions, questions} = useGetQuestions();
	const {isLoadingAnswers, answers} = useGetAnswers();
	if (isLoadingQuestions) {
		return <h1>Loading...</h1>;
	}
	if (isLoadingAnswers) {
		return <h1>Loading...</h1>;
	}
	const question = questions?.find(question => question._id === idFromUrl);

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
		setQuestion(newQuestion);
		event.target.reset();
	};
	const closeQuestion = () => {
		question.answered = !question.answered;
		setQuestion(question);
	};
	return (
		<StyledQuestionDetails>
			<StyledNavigation>
				<Button
					onClick={() => {
						navigate(-1);
					}}
				>
					<svg width="2em" height="2em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z"
						/>
					</svg>
				</Button>
				<StyledImage
					src={
						question.answered
							? require('../../utils/icons/statusOpen.svg').default
							: require('../../utils/icons/statusClosed.svg').default
					}
					alt={question.answered ? 'Open' : 'Closed '}
				/>
				{question.userID === activeUser._id && (
					<Button
						onClick={() => {
							closeQuestion(question.id);
						}}
					>
						<StyledImage
							src={
								question.answered
									? require('../../utils/icons/check.svg').default
									: require('../../utils/icons/unCheck.svg').default
							}
							alt={question.answered ? 'Open' : 'Closed'}
						/>
					</Button>
				)}
			</StyledNavigation>
			<StyledQuestionHead>
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
					<h4>{question.questionText} </h4>
				)}

				{question.userID === activeUser._id && (
					<Button
						onClick={() => {
							setShowEditQuestionForm(!showEditQuestionForm);
						}}
					>
						<svg width="2em" height="2em" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2"
							/>
						</svg>
					</Button>
				)}
			</StyledQuestionHead>

			<StyledQuestionBody>
				{answers?.map(answer => {
					if (question._id === answer.questionID) {
						return <AnswerCard key={answer._id}>{answer.answerText}</AnswerCard>;
					}
					return null;
				})}

				<Form
					onSubmit={event => {
						addAnswer(event);
					}}
					placeholderText="Type in your answer..."
					submitButtonText={'->'}
				/>
			</StyledQuestionBody>
		</StyledQuestionDetails>
	);
}
