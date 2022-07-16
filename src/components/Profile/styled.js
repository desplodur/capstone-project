import styled from 'styled-components';

export const StyledProfile = styled.section`
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const StyledProfilePicture = styled.img`
	border-radius: 100%;
	border: 0.1em solid var(--dark);
	width: 60%;
	margin: 2em;
`;

export const LogoutButton = styled.button`
	margin: 2em;
	padding: 0.5em;
	background-color: var(--dark);
	width: 8em;
	font-size: 2rem;
	border: none;
	border-radius: 8px;
	color: var(--light);
`;
