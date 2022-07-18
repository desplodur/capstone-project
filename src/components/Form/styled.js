import styled, {css} from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	width: 70vw;
	height: 2em;
	input {
		width: 95em;
		height: 100%;
		border: 2px solid var(--dark);
		border-radius: 5px 0 0 5px;
		background-color: var(--light);
	}
	button {
		width: 5em;
		height: 100%;
		border: 2px solid var(--dark);
		border-radius: 0 5px 5px 0;
		background-color: var(--dark);
		color: var(--light);
	}

	${props =>
		props.fixedForm &&
		css`
			width: 100%;
			padding: 0 1em 0 1em;
			position: fixed;
			bottom: 0;
			right: 0;
			margin-bottom: 12vh;
		`}
`;

export default StyledForm;
