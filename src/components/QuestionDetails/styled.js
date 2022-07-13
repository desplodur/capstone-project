import styled from 'styled-components';

export const StyledQuestionDetails = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100vw;
	height: 100vh;
	border: var(--dark);
	background-color: var(--lightblue);
	color: var(--light);
	font-size: 1.5rem;

	img#statusIndicator {
		position: absolute;
		width: 30px;
		top: 10px;
		right: 30px;
	}

	button#smallEditButton {
		position: absolute;
		top: 10px;
		right: 60px;
	}

	button#changeStatus {
		position: absolute;
		top: 10px;
		right: 90px;
	}
`;

export const StyledContent = styled.article`
	padding: 1em;
	margin-top: 1em;
`;
