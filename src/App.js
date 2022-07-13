import {signIn, signOut} from '@pforte/client';
import {useSession} from '@pforte/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ProfilePage from './pages/profile';
import QuestionPage from './pages/questions';
import {GlobalStyle} from './styles';

export default function App() {
	const session = useSession();
	return (
		<>
			<GlobalStyle />
			{session ? (
				<BrowserRouter>
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="questions/" element={<QuestionPage />} />
							<Route path="profile/" element={<ProfilePage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			) : (
				<>
					<p>Sign in to see some magic!</p>
					<button
						type="button"
						onClick={() => {
							void signIn('github');
						}}
					>
						Sign In with GitHub
					</button>
				</>
			)}
		</>
	);
}
