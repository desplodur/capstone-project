import styled from 'styled-components';

export const StyledQuestionDetails = styled.section`
	position: relative;
	width: 100vw;
	height: auto;
	min-height: 90vh;
	padding: 1em;
	border: var(--dark);
	background-color: var(--lightblue);
	color: var(--light);
	font-size: 1.5rem;
`;
export const StyledNavigation = styled.article`
	display: grid;
	grid-template-columns: 2em auto 2em;
	grid-template-rows: 5vh;
	align-items: center;
	justify-items: center;
`;
export const StyledImage = styled.img`
	width: 40px;
`;
export const StyledQuestionHead = styled.article`
	display: grid;
	grid-template-columns: auto 2em;
	grid-template-rows: auto;
	align-items: start;
	justify-items: center;
	margin: 1em 0 1em 0;
`;
export const StyledQuestionBody = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 0.5em;
`;
