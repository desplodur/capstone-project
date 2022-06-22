import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import InputLabel from './';

describe('InputLabel component', () => {
	it('should render children', () => {
		const text = 'Click me';
		render(<InputLabel>{text}</InputLabel>);
		const label = screen.getByText(text);
		expect(label).toBeInTheDocument();
	});
});
