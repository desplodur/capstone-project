import styled from 'styled-components';

const StyledForm = styled.form`
	margin: 0 auto;
	padding: 1em 0 1em 0;

	button {
		height: 2em;
		border: 2px solid var(--dark);
		border-radius: 0 5px 5px 0;
		background-color: var(--dark);
		color: var(--light);
	}
	input {
		height: 2em;
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		background-color: var(--light);
	}
`;

export default StyledForm;
