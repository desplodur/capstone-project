import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import QuestionComponent from './';

const question = {
	id: 122,
	questionText: 'What is export default?',
	answers: [
		{id: 123, answerText: 'its ...'},
		{id: 124, answerText: 'it means that ...'},
	],
};

describe('Question Component', () => {
	it('should render children', () => {
		render(<QuestionComponent question={question} />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});
