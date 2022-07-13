import {useNavigate} from 'react-router-dom';

import Button from '../Button';

import {StyledQuestionComponent} from './styled';
import {StyledContent} from './styled';

export default function QuestionComponent({question, ...props}) {
	const navigate = useNavigate();

	return (
		<StyledQuestionComponent {...props}>
			<StyledContent>
				<h4>{question.questionText}</h4>
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
