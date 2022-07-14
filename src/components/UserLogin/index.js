import {signIn} from '@pforte/client';

import StyledUserLogin from './styled';

export default function UserLogin() {
	return (
		<StyledUserLogin>
			<h1>Sign in to join the Community</h1>
			<button
				type="button"
				onClick={() => {
					void signIn('github');
				}}
			>
				Sign In with GitHub
			</button>
		</StyledUserLogin>
	);
}
