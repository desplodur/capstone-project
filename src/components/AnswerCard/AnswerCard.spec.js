import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import AnswerCard from '.';

describe('Answer Card', () => {
	it('should render children', () => {
		const text = 'Answer';
		render(<AnswerCard>{text}</AnswerCard>);
		const answer = screen.getByText(text);
		expect(answer).toBeInTheDocument();
	});
});
