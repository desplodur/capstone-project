import create from 'zustand';

import questionDatabase from '../utils/db';

export const useStore = create(set => ({
	questions: [...questionDatabase],
	addNewAnswers: newQuestion => {
		set(() => {
			return {
				questions: newQuestion,
			};
		});
	},
	addNewQuestion: newQuestion => {
		set(state => {
			return {
				questions: [newQuestion, ...state.questions],
			};
		});
	},
}));
