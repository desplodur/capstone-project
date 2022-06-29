import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root{
		--light: #fff;
		--dark: #343434;
		--blue: #14213d;
		--signal: #F1C40F;
	}

	html {
		font-size: 16px;
	}

	body {
		background-color: var(--light);
		margin: 0;
		font-size: 1rem;
		color: var(--dark);
	}
	
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;		
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100%
	}
`;
