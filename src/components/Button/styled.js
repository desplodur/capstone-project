import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: var(--light);
	font-size: 1em;
	${props =>
		props.submitButton &&
		css`
			height: 100%;
			border: 2px solid var(--dark);
			border-radius: 0 5px 5px 0;
			background-color: var(--dark);
		`}
	${props =>
		props.greyButton &&
		css`
			width: 100%;
			padding: 0.5em 0 0.5em 0;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 0 0 8px 8px;
			background-color: var(--dark);
			:hover {
				background-color: var(--darktHover);
			}
		`}
	
	${props =>
		props.editButtonSmall &&
		css`
			font-size: 0.4rem;
		`}
	${props =>
		props.editButtonBig &&
		css`
			color: var(--dark);
		`}
`;
export default StyledButton;
