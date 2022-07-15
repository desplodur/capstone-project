import create from 'zustand';

export const useStore = create(set => ({
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
		fetch(`../../api/users/${activeUserID}`, {
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
}));
