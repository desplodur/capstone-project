import {useSession} from '@pforte/react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


import Button from '../Button';

import {StyledQuestionComponent} from './styled';
import {StyledContent} from './styled';
import {StatusIndicator} from './styled';

export default function QuestionComponent({question, ...props}) {

	const navigate = useNavigate();

	return (
		<StyledQuestionComponent {...props}>
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
		</StyledQuestionComponent>
	);
}
