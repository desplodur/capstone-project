import StyledForm from './styled';

export default function Form({onSubmit, placeholderText, submitButtonText, ...props}) {
	return (
		<StyledForm onSubmit={onSubmit} {...props}>
			<input type="text" name="inputField" placeholder={placeholderText} required />
			<button type="submit" value="Submit the form">
				{submitButtonText}
			</button>
		</StyledForm>
	);
}
