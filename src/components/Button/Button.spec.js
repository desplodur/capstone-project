import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import Button from './';

describe('Button component', () => {
	it('should render children', () => {
		const text = 'ButtonText';
		render(<Button>{text}</Button>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick} />);
		const submitButton = screen.getByRole('button');
		await fireEvent.click(submitButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
