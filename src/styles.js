import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root{
		--light: #ffffff;
		--dark: #343434;
		--blue: #14213d;
		--signal: #F1C40F;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-size: 1rem;
		background-color: var(--light);
		color: var(--dark);
	}
	
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}

	Footer {
		position: fixed;
		bottom: 0;
		width: 100%
	}
`;
