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
		props.greyButton
			? css`
					width: 100%;
					padding: 0.5em 0 0.5em 0;
					font-size: 1.2rem;
					border-radius: 0 0 8px 8px;
					background-color: var(--dark);
					:hover {
						background-color: var(--darktHover);
					}
			  `
			: null}
	
	${props =>
		props.editButtonSmall
			? css`
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
