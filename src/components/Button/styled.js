import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: var(--light);
	${props =>
		props.submitButton
			? css`
					height: 100%;
					border: 2px solid var(--dark);
					border-radius: 0 5px 5px 0;
					background-color: var(--dark);
			  `
			: null}
	${props =>
		props.toggleButton
			? css`
					width: 100%;
					font-size: 1.2em;
					border-radius: 0 0 5px 5px;
					background-color: var(--dark);
			  `
			: null}
	
	${props =>
		props.editButtonSmall
			? css`
					position: absolute;
					top: 20px;
					right: 10px;
					font-size: 0.4rem;
			  `
			: ''}
			${props =>
		props.editButtonBig
			? css`
					font-size: 1rem;
					color: var(--dark);
			  `
			: null}
`;
export default StyledButton;
