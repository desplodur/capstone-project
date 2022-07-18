import {signIn} from '@pforte/client';

import Button from '../Button';

import StyledUserLogin from './styled';

export default function UserLogin() {
	return (
		<StyledUserLogin>
			<h1>Sign in to join the Community</h1>
			<Button
				loginButton={true}
				type="button"
				onClick={() => {
					signIn('github');
				}}
			>
				Sign In with GitHub
			</Button>
		</StyledUserLogin>
	);
}
