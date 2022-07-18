import styled from 'styled-components';

export const StyledProfile = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
	margin: 0 auto;
`;
export const StyledProfilePicture = styled.img`
	width: 30vh;
	margin: 2em;
	border: 0.1em solid var(--dark);
	border-radius: 100%;
`;

export const LogoutButton = styled.button`
	width: 8em;
	margin: 1em;
	padding: 0.5em;
	border: none;
	border-radius: 8px;
	background-color: var(--dark);
	color: var(--light);
	font-size: 2rem;
`;
