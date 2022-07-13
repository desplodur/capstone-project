import {signOut} from '@pforte/client';
import {useSession} from '@pforte/react';

import Button from '../Button';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const session = useSession();

	console.log(session);
	return (
		<StyledProfile>
			<article>
				{session && <img src={session.user.image} alt={session.user.name} />}
				<h1>
					Username
					{session?.user.name ?? 'Loading...'}
				</h1>
				<label>Choose a Title:</label>
				<select name="title">
					<option value="beginner" selected>
						Duckling
					</option>
					<option value="intermediate">Nerd</option>
					<option value="advanced">Hacker</option>
				</select>
				<Button
					greyButton={true}
					type="button"
					onClick={() => {
						void signOut('github');
					}}
				>
					Sign out
				</Button>
			</article>
		</StyledProfile>
	);
}
