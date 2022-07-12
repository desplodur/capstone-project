import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useStore = create(
	persist(
		set => ({
			questions: {
				loading: true,
				error: null,
				data: [],
			},
			answers: {
				loading: true,
				error: null,
				data: [],
			},
			users: {
				loading: true,
				error: null,
				data: [],
			},
			activeUser: {
				_id: '123412',
				userName: 'Laurenz',
			},
			fetchData: () => {
				fetch('../../api')
					.then(response => response.json())
					.then(data => {
						set({
							questions: {loading: false, error: null, data: data.questions},
							answers: {loading: false, error: null, data: data.answers},
							users: {loading: false, error: null, data: data.users},
						});
					})
					.catch(error => {
						set(state => ({
							questions: {loading: false, error: error, data: state.questions.data},
							answers: {loading: false, error: error, data: state.answers.data},
							users: {loading: false, error: error, data: state.users.data},
						}));
					});
			},

			addNewQuestion: newQuestion => {
				fetch('../../api/questions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newQuestion),
				}).catch(error => {
					set({
						data: '',
						error: error.message,
					});
				});
				set(state => {
					return {
						questions: {data: [...state.questions.data, newQuestion]},
					};
				});
			},

			addNewAnswer: newAnswer => {
				fetch('../../api/answers', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newAnswer),
				}).catch(error => {
					set({
						data: '',
						error: error.message,
					});
				});
				set(state => {
					return {
						answers: {data: [...state.answers.data, newAnswer]},
					};
				});
			},

			setQuestion: (questionID, newQuestion) => {
				fetch(`../../api/questions/${questionID}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newQuestion),
				}).catch(error => {
					set({
						data: '',
						error: error.message,
					});
				});
			},

			/****/

			/*
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
			},*/

			changeUsername: (activeUserID, newUserName) => {
				set(state => {
					state.users.map(user => {
						if (user._id === activeUserID) {
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
