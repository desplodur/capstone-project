import {expect} from '@jest/globals';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import Form from '.';

describe('Question Form', () => {
	it('should render form', () => {
		render(<Form />);
		const submitButton = screen.getByRole('button', {type: 'submit'});
		expect(submitButton).toBeInTheDocument();
	});
});

describe('Question form submit button', () => {
	it('should submit the form', async () => {
		const onSubmitHandler = jest.fn(event => {
			event.preventDefault();
		});
		render(<Form onSubmit={onSubmitHandler} />);
		const submitButton = screen.getByRole('button', {type: 'submit'});
		await fireEvent.click(submitButton);
		expect(onSubmitHandler).toHaveBeenCalledTimes(1);
	});
});

describe('Question form', () => {
	it('should return the input field value', async () => {
		render(<Form />);
		const inputField = screen.getByRole('textbox', {type: 'text'});
		fireEvent.change(inputField, {target: {value: 'test'}});
		expect(inputField.value).toBe('test');
	});
});
