import Button from '../Button';

import {StyledQuestionComponent} from './styled';
import {StyledContent} from './styled';

export default function QuestionComponent({question, setOpen, ...props}) {
	return (
		<StyledQuestionComponent {...props}>
			<StyledContent>
				<h4>{question.questionText}</h4>
			</StyledContent>

			<Button
				greyButton={true}
				onClick={() => {
					setOpen(true);
				}}
			>
				Go to Question
			</Button>
		</StyledQuestionComponent>
	);
}
