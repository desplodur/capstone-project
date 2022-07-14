import styled from 'styled-components';

const StyledDialog = styled.dialog`
	position: absolute;
	z-index: 1;
	top: 40%;
	margin: 0 auto;
	padding: 1em;
	border: 4px solid var(--signal);
	border-radius: 1em;
	color: var(--signal);
	font-size: 1.5rem;
	text-align: center;
`;

export default StyledDialog;
