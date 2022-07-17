import styled, {css} from 'styled-components';

export const StyledQuestionCard = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 85vw;
	min-height: 8em;
	margin: 0.5em 0 0.5em 0;
	border: var(--dark);
	border-radius: 8px;
	background-color: var(--blue);
	color: var(--light);

	img#statusIndicator {
		position: absolute;
		top: 5px;
		right: 5px;
	}
	${props =>
		props.ownedQuestion &&
		css`
			background-color: var(--lightblue);
			color: var(--dark);
		`}
`;

export const StyledContent = styled.div`
	padding: 1em 4em 1em 1em;
`;

export const StatusIndicator = styled.img`
	position: absolute;
	top: 5px;
	right: 5px;
`;
