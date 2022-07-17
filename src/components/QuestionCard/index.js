import {useNavigate} from 'react-router-dom';

import Button from '../Button';

import {StyledQuestionCard} from './styled';
import {StyledContent} from './styled';
import {StatusIndicator} from './styled';

export default function QuestionCard({question, ...props}) {
	const navigate = useNavigate();

	return (
		<StyledQuestionCard {...props}>
			<StyledContent>
				<h4>{question.questionText}</h4>
				<StatusIndicator
					src={
						question.answered
							? require('../../utils/icons/statusOpen.svg').default
							: require('../../utils/icons/statusClosed.svg').default
					}
					alt={question.answered ? 'Open' : 'Closed '}
				/>
			</StyledContent>

			<Button
				greyButton={true}
				onClick={() => {
					navigate('/' + question._id);
				}}
			>
				Go to Question
			</Button>
		</StyledQuestionCard>
	);
}
