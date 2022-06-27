import {useState} from 'react';

import Form from '../Form';

import StyledQuestionComponent from './styled';

export default function QuestionComponent({question, addAnswer}) {
	const [toggle, setToggle] = useState(true);

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
