import create from 'zustand';

import questionDatabase from '../utils/db';

export const useStore = create((set, get) => ({
	questions: [...questionDatabase],
	addNewQuestion: newQuestion => {
		set(state => {
			return {
				questions: [newQuestion, ...state.questions],
			};
		});
	},
}));
