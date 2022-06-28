import styled from 'styled-components';

const StyledForm = styled.form`
	margin: 0 auto;
	padding: 1em 0 1em 0;

	button {
		border: 2px solid var(--dark);
		border-radius: 0 5px 5px 0;
		height: 2em;
		background-color: var(--dark);
		color: var(--light);
	}
	input {
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		height: 2em;
		background-color: var(--light);
	}
`;

export default StyledForm;
