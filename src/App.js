<<<<<<< HEAD
import {SessionProvider} from '@pforte/react';
=======
>>>>>>> main
import {QueryClientProvider, QueryClient} from 'react-query';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import ProfilePage from './pages/profile';
import QuestionDetailPage from './pages/questionDetailPage';
import QuestionPage from './pages/questions';
import {GlobalStyle} from './styles';

const queryClient = new QueryClient();

export default function App() {
	return (
<<<<<<< HEAD
		<SessionProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="questions/" element={<QuestionPage />} />
							<Route path="profile/" element={<ProfilePage />} />
							<Route path="/:idFromUrl" element={<QuestionDetailPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</SessionProvider>
=======
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="questions/" element={<QuestionPage />} />
						<Route path="profile/" element={<ProfilePage />} />
						<Route path="/:idFromUrl" element={<QuestionDetailPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
>>>>>>> main
	);
}
