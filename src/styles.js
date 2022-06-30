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
		--signal: #f6ae2d;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color: var(--light);
		color: var(--dark);
		font-size: 1rem;
	}
	
	main {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;		
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100%
	}
`;
