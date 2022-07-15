import {createRoot} from 'react-dom/client';

import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
