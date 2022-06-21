import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import QuestionComponent from './';

describe('Question Component', () => {
	it('should render children', () => {
		const text = 'What does clean code mean?';
		render(<QuestionComponent>{text}</QuestionComponent>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});
