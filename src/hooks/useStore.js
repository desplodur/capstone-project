import create from 'zustand';
import {persist} from 'zustand/middleware';

import questionDatabase from '../utils/questionDatabase';
import userDatabase from '../utils/userDatabase';

export const useStore = create(
	persist(
		set => ({
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
		}),
		{
			name: 'question-storage', 
			getStorage: () => sessionStorage, 
	)
);
