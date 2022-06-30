import styled from 'styled-components';

const buttonState = {
	width: {
		small: '1rem',
		medium: '5rem',
		large: '95vw',
	},
	height: {
		small: '1.5rem',
		medium: '2.5rem',
		large: '2rem',
	},
	marginTop: {
		small: '0.25rem',
		medium: '0.5rem',
		large: '0.5rem',
	},
	marginLeft: {
		small: '0',
		medium: '0',
		large: '0.75rem',
	},
};

const StyledButton = styled.button`
	margin-top: 0.5rem;
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	background: #fff;
	color: #000;
	font-size: 1em;
	${props => `
	width: ${buttonState.width[props.variant] ?? buttonState.width.medium};
	height: ${buttonState.height[props.variant] ?? buttonState.height.medium};
	margin-top: ${buttonState.marginTop[props.variant] ?? buttonState.marginTop.medium};
	margin-left: ${buttonState.marginLeft[props.variant] ?? buttonState.marginLeft.medium};
	`};
	svg {
		position: relative;
		top: -0.25rem;
		right: 0.5rem;
	}
	&:hover {
		background: lightgreen;
	}
	&:active {
		background: #bad;
	}
`;

export default StyledButton;
