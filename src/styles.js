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
		--darktHover: #3D3D3D;
		--lightblue: #85BDBF;
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
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 10vh;		
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 10vh;
	}
	h1,h2,h3,h4 {
		margin:0;
		padding:0;
	 }
`;
