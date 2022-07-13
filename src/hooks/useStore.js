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
			activeUser: {_id: '62cd8668823139d893144b3c', userName: 'Michael'},

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
				set(state => {
					return {
						questions: {...state.questions, loading: true, error: null},
					};
				});
				fetch('/api/questions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newQuestion),
				})
					.then(data => {
						set(state => {
							return {
								questions: {
									error: null,
									loading: false,
									data: [...state.questions.data, data],
								},
							};
						});
					})
					.catch(error => {
						set(state => {
							return {
								questions: {
									...state.questions,
									loading: false,
									error: error.message,
								},
							};
						});
					});
			},

			addNewAnswer: newAnswer => {
				fetch('/api/answers', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newAnswer),
				})
					.then(data => {
						set(state => {
							return {
								answers: {
									error: null,
									loading: false,
									data: [...state.answers.data, data],
								},
							};
						});
					})
					.catch(error => {
						set(state => {
							return {
								answers: {...state.answers, loading: false, error: error.message},
							};
						});
					});
			},

			setQuestion: (questionID, newQuestion) => {
				fetch(`/api/questions/${questionID}`, {
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
				set(state => {
					state.questions.data.map(question => {
						if (question._id === questionID) {
							return {
								questions: {data: newQuestion},
							};
						}
						return null;
					});
				});
			},
			changeUsername: (activeUserID, newUser) => {
				fetch(`/api/users/${activeUserID}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newUser),
				}).catch(error => {
					set({
						data: '',
						error: error.message,
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
