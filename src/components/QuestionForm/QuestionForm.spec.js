import {expect} from '@jest/globals';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import QuestionForm from './';

describe('Question Form', () => {
	it('should render form', () => {
		const {getByText} = render(<QuestionForm />);
		const questionMessage = getByText('Is there something you did not understand?');
		expect(questionMessage).toBeInTheDocument();
	});
});

describe('Question form submit button', () => {
	it('should submit the form', async () => {
		const onSubmit = jest.fn(event => {
			event.preventDefault();
		});
		render(<QuestionForm onSubmitFunction={onSubmit} />);
		const submitButton = screen.getByRole('button', {type: 'submit'});
		await fireEvent.click(submitButton);
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});

describe('Question form submit', () => {
	it('should return the input field value', async () => {
		const onSubmit = jest.fn(event => {
			event.preventDefault();
			fireEvent.change(inputField, {target: {value: 'test'}});
		});
		render(<QuestionForm onSubmitFunction={onSubmit} />);
		const submitButton = screen.getByRole('button', {type: 'submit'});
		const inputField = screen.getByRole('textbox', {type: 'text'});
		await fireEvent.click(submitButton);
		expect(inputField.value).toBe('test');
	});
});
