import styled from 'styled-components';

const StyledAnswerCard = styled.div`
	position: relative;
	width: fit-content;
	padding: 0.5em;
	border-radius: 8px;
	background: var(--light);
	color: var(--dark);
	text-align: center;

	::after {
		content: '';
		position: absolute;
		top: 95%;
		left: -10px;
		width: 0;
		margin-top: -15px;
		border-width: 0 0 10px 10px;
		border-style: solid;
		border-color: transparent transparent var(--light) transparent;
	}
`;

export default StyledAnswerCard;
