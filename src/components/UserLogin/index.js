import {signIn} from '@pforte/client';

export default function UserLogin() {
	return (
		<>
			<h1>Sign in to join the Community</h1>
			<button
				type="button"
				onClick={() => {
					void signIn('github');
				}}
			>
				Sign In with GitHub
			</button>
		</>
	);
}
