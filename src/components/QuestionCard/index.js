import Button from '../Button';

import {StyledQuestionComponent} from './styled';
import {StyledContent} from './styled';

export default function QuestionComponent({question, ...props}) {
	return (
		<StyledQuestionComponent {...props}>
			<StyledContent>
				<h4>{question.questionText}</h4>
			</StyledContent>

			<Button greyButton={true} onClick={() => {}}>
				Go to Question
			</Button>
		</StyledQuestionComponent>
	);
}
