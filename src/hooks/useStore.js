import create from 'zustand';

import questionDatabase from '../utils/questionDatabase';
import userDatabase from '../utils/userDatabase';

export const useStore = create(set => ({
	questions: [...questionDatabase],
	addNewAnswer: newQuestion => {
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
	users: userDatabase,
	activeUser: userDatabase[0],
	setActiveUser: newActiveUser => {
		console.log(newActiveUser);
		set(() => {
			return {
				activeUser: newActiveUser,
			};
		});
	},
}));
