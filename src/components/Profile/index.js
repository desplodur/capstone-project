import {signOut} from '@pforte/client';
import {useSession} from '@pforte/react';

import {StyledProfile} from './styled';
import {StyledProfilePicture} from './styled';
import {LogoutButton} from './styled';

export default function ProfileComponent() {
	const session = useSession();

	return (
		<StyledProfile>
			{session && <StyledProfilePicture src={session.user.image} alt={session.user.name} />}
			<h1>{session.user.name ? 'Username: ' + session.user.name : 'Loading...'}</h1>
			<LogoutButton
				type="button"
				onClick={() => {
					signOut('github');
				}}
			>
				Sign out
			</LogoutButton>
		</StyledProfile>
	);
}
