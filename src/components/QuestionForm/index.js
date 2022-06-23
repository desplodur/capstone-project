import StyledQuestionForm from './styled';

export default function QuestionForm({onSubmit}) {
	return (
		<StyledQuestionForm onSubmit={onSubmit}>
			<label>
				<h2>Is there something you did not understand?</h2>
				<h3>Ask your classmates!</h3>
				<input
					type="text"
					name="questionTextInput"
					placeholder="...what is meant by clean code?"
					required
				/>
			</label>
			<button type="submit" value="Ask your Question">
				Ask your Question
			</button>
		</StyledQuestionForm>
	);
}
