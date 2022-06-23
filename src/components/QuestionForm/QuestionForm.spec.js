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
		const onSubmitHandler = jest.fn(event => {
			event.preventDefault();
		});
		render(<QuestionForm onSubmit={onSubmitHandler} />);
		const submitButton = screen.getByRole('button', {type: 'submit'});
		await fireEvent.click(submitButton);
		expect(onSubmitHandler).toHaveBeenCalledTimes(1);
	});
});

describe('Question form', () => {
	it('should return the input field value', async () => {
		render(<QuestionForm />);
		const inputField = screen.getByRole('textbox', {type: 'text'});
		fireEvent.change(inputField, {target: {value: 'test'}});
		expect(inputField.value).toBe('test');
	});
});
