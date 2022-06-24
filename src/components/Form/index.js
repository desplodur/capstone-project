import StyledForm from './styled';

export default function Form({onSubmit, submitButtonText}) {
	return (
		<StyledForm onSubmit={onSubmit}>
			<input type="text" name="inputField" placeholder="..." required />
			<button type="submit" value="Submit the form">
				{submitButtonText}
			</button>
		</StyledForm>
	);
}
