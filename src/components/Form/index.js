import StyledForm from './styled';

export default function Form({onSubmit, submitButtonValue}) {
	return (
		<StyledForm onSubmit={onSubmit}>
			<input type="text" name="inputField" placeholder="..." required />
			<button type="submit" value="Ask your Question">
				{submitButtonValue}
			</button>
		</StyledForm>
	);
}
