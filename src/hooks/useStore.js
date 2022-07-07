import create from 'zustand';
import {persist} from 'zustand/middleware';

import dataBase from '../utils/dataBase';
import useFetch from '../hooks/useFetch';

export const useStore = create(
	persist(
		set => ({
			questions: [...dataBase.questions],
			answers: [...dataBase.answers],
			users: [...dataBase.users],
			activeUser: dataBase.users[0],

			setQuestions: newQuestions => {
				set(() => {
					return {
						questions: newQuestions,
					};
				});
			},
			addNewAnswer: (questionID, newAnswer) => {
				set(state => {
					const newQuestions = state.questions.map(question => {
						if (question.id === questionID) {
							question.answers = [...question.answers, newAnswer.id];
						}
						return question;
					});
					return {
						answers: [newAnswer, ...state.answers],
						questions: newQuestions,
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
			changeUsername: (activeUserID, newUserName) => {
				set(state => {
					state.users.map(user => {
						console.log(user.userID);
						if (user.userID === activeUserID) {
							return (user.userName = newUserName);
						}
						return null;
					});
				});
			},
			setActiveUser: newActiveUser => {
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
		}
	)
);
