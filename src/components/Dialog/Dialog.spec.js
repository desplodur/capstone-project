import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Dialog from '.';

describe('Dialog', () => {
	it('should render children', () => {
		const text = 'Dialog text';
		render(<Dialog>{text}</Dialog>);
		const dialogText = screen.getByText(text);
		expect(dialogText).toBeInTheDocument();
	});
});
