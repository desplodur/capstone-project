import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import QuestionPage from './pages/questions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="questions/" element={<QuestionPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
