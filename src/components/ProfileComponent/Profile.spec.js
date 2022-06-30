import {expect} from '@jest/globals';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ProfileComponent from '.';

describe('Profile Component', () => {
	it('should render', () => {
		render(<ProfileComponent />);
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	});
});
