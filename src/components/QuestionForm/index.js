import StyledQuestionForm from './styled';

export default function QuestionForm({createNewQuestion}) {
	return (
		<StyledQuestionForm>
			<h2>Is there something you did not understand?</h2>
			<h3>Ask your classmates!</h3>
			<form onSubmit={createNewQuestion}>
				<input
					type="text"
					name="questionTextInput"
					placeholder="...what is meant by clean code?"
				></input>
				<input type="submit" value="Ask your Question"></input>
			</form>
		</StyledQuestionForm>
	);
}
