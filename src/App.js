import {SessionProvider} from '@pforte/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ProfilePage from './pages/profile';
import QuestionPage from './pages/questions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<SessionProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="questions/" element={<QuestionPage />} />
						<Route path="profile/" element={<ProfilePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</SessionProvider>
	);
}
