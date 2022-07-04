import styled from 'styled-components';

const StyledForm = styled.form`
	height: 2em;
	margin: 0 auto;

	input {
		height: 100%;
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		background-color: var(--light);
	}
`;

export default StyledForm;
