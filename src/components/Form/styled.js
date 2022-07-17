import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	width: 100%;
	height: 2em;
	input {
		height: 100%;
		width: 80%;
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		background-color: var(--light);
	}
	button {
		height: 100%;
		width: 20%;
		border: 2px solid var(--dark);
		border-radius: 0 5px 5px 0;
		background-color: var(--dark);
		color: var(--light);
	}
`;

export default StyledForm;
