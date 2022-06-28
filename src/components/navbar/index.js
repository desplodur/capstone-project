import {Link} from 'react-router-dom';

import StyledNavBar from './styled';

export default function NavBar() {
	return (
		<StyledNavBar>
			<Link to="/questions">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					width="40"
					height="40"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="var(--light)"
						d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"
					/>
				</svg>
			</Link>
			<Link to="/">
				<svg
					width="51"
					height="51"
					viewBox="0 0 51 51"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="25.5"
						cy="25.5"
						r="24.5"
						fill="white"
						stroke="black"
						strokeWidth="2"
					/>
					<path d="M26 15V36" stroke="black" />
					<line x1="36" y1="25.5" x2="15" y2="25.5" stroke="black" />
				</svg>
			</Link>
			<Link to="/profile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					width="42"
					height="42"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<g
						fill="none"
						stroke="var(--light)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
					>
						<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" />
						<path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
					</g>
				</svg>
			</Link>
		</StyledNavBar>
	);
}
