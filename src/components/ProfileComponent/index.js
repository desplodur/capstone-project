import {useState} from 'react';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const [username, setUserName] = useState('Laurenz');
	return (
		<StyledProfile>
			<h1>{'Username: ' + username}</h1>
		</StyledProfile>
	);
}
