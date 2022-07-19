import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import LoadingScreen from '.';

describe('LoadingScreen', () => {
	it('should be visible', () => {
		render(<LoadingScreen />);
		const LoadingScreenText = screen.getByRole('article');
		expect(LoadingScreenText).toBeInTheDocument();
	});
});
