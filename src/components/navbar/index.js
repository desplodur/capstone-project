import {Link} from 'react-router-dom';

import StyledNavBar from './styled';

export default function NavBar() {
	return (
		<StyledNavBar>
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
		</StyledNavBar>
	);
}
