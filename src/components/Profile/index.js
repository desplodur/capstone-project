<<<<<<< HEAD
import {signOut} from '@pforte/client';
import {useSession} from '@pforte/react';

import {StyledProfile} from './styled';
import {StyledProfilePicture} from './styled';
import {LogoutButton} from './styled';

export default function ProfileComponent() {
	const session = useSession();
=======
import {useStore} from '../../hooks/useStore';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const activeUser = useStore(state => state.activeUser);
>>>>>>> main

	console.log(session);
	return (
		<StyledProfile>
<<<<<<< HEAD
			{session && <StyledProfilePicture src={session.user.image} alt={session.user.name} />}
			<h1>{'Username: ' + session?.user.name ?? 'Loading...'}</h1>
			<LogoutButton
				type="button"
				onClick={() => {
					void signOut('github');
				}}
			>
				Sign out
			</LogoutButton>
=======
			<article>
				<h1>{'Username: ' + activeUser.userName}</h1>
			</article>
>>>>>>> main
		</StyledProfile>
	);
}
