import {nanoid} from 'nanoid';
import {useQuery, useMutation, useQueryClient} from 'react-query';

import {fetchQuestions} from './useFetch';
import {fetchAnswers} from './useFetch';
import {fetchUsers} from './useFetch';
import {addNewAnswer} from './useFetch';
import {setQuestion} from './useFetch';

export const useGetQuestions = (onSuccess, onError) => {
	const questions = useQuery('myQuestions', fetchQuestions, {
		onSuccess,
		onError,
		//refetchInterval: 2000,
	});
	console.log(questions);
	return questions;
};
export const useGetAnswers = (onSuccess, onError) => {
	return useQuery('myAnswers', fetchAnswers, {
		onSuccess,
		onError,
		//refetchInterval: 2000,
	});
};
export const useGetUsers = (onSuccess, onError) => {
	return useQuery('myUsers', fetchUsers, {
		onSuccess,
		onError,
		//refetchInterval: 2000,
	});
};

export const useAddNewAnswer = () => {
	const queryClient = useQueryClient();
	return useMutation(addNewAnswer, {
		onMutate: async newAnswer => {
			await queryClient.cancelQueries('myData');
			const previousData = queryClient.getQueryData('myData');
			queryClient.setQueryData('myData', oldQueryData => {
				return {
					...oldQueryData,
					answers: [...oldQueryData.answers, {_id: nanoid, ...newAnswer}],
				};
			});
			return {
				previousData,
			};
		},
		onError: (_error, _newAnswer, context) => {
			queryClient.setQueryData('myData', context.previousData);
		},
		onSettled: () => {
			queryClient.invalidateQueries('myData');
		},
	});
};

export const useSetQuestion = questions => {
	const queryClient = useQueryClient();
	return useMutation(setQuestion, {
		onMutate: async newQuestion => {
			await queryClient.cancelQueries('myData');
			const previousData = queryClient.getQueryData('myData');
			console.log(previousData);
		},
		onError: (_error, _newAnswer, context) => {
			queryClient.setQueryData('myData', context.previousData);
		},
		onSettled: () => {
			queryClient.invalidateQueries('myData');
		},
	});
};
