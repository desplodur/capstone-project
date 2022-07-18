import create from 'zustand';

export const useStore = create(set => ({
<<<<<<< HEAD
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

	fetchData: () => {
		fetch('../../api')
			.then(response => response.json())
			.then(data => {
				set({
					questions: {loading: false, error: null, data: data.questions},
					answers: {loading: false, error: null, data: data.answers},
				});
			})
			.catch(error => {
				set(state => ({
					questions: {loading: false, error: error, data: state.questions.data},
					answers: {loading: false, error: error, data: state.answers.data},
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
=======
	activeUser: {_id: '62cd8668823139d893144b3c', userName: 'Michael'},
>>>>>>> react-query
}));
