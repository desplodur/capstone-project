import styled, {css} from 'styled-components';

const StyledQuestionComponent = styled.section`
	position: relative;
	width: 90vw;
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

	button#smallEditButton {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	button#changeStatus {
		position: absolute;
		top: 50px;
		right: 10px;
	}

	${props =>
		props.ownedQuestion
			? css`
					background-color: var(--lightblue);
					color: var(--dark);
			  `
			: null}
`;

export default StyledQuestionComponent;
