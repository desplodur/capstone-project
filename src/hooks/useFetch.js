//import {useEffect, useState} from 'react';
import create from 'zustand';

export const useStore = create(set => ({
	questions: {
		loading: false,
		error: null,
		data: null,
	},
	answers: {
		loading: false,
		error: null,
		data: null,
	},
	users: {
		loading: false,
		error: null,
		data: null,
	},
	fetchData() {
		fetch('../../api')
			.then(response => response.json())
			.then(data => {
				set({
					questions: {loading: false, error: null, data},
					answers: {loading: false, error: null, data},
					users: {loading: false, error: null, data},
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
}));
