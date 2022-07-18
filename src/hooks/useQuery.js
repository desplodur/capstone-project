import {nanoid} from 'nanoid';
import {useQuery, useMutation, useQueryClient} from 'react-query';

import {fetchQuestions} from './useFetch';
import {fetchAnswers} from './useFetch';
<<<<<<< HEAD
=======
import {fetchUsers} from './useFetch';
>>>>>>> main
import {addNewAnswer} from './useFetch';
import {addNewQuestion} from './useFetch';
import {setQuestion} from './useFetch';

export const useGetData = (onSuccess, onError) => {
	const questions = useQuery('myQuestions', fetchQuestions);
	const answers = useQuery('myAnswer', fetchAnswers);
<<<<<<< HEAD

	return {questions, answers};
=======
	const users = useQuery('myUsers', fetchUsers);

	return {questions, answers, users};
>>>>>>> main
};

export const useAddNewAnswer = () => {
	const queryClient = useQueryClient();
	return useMutation(addNewAnswer, {
		onMutate: async newAnswer => {
			await queryClient.cancelQueries('myAnswer');
			const previousData = queryClient.getQueryData('myAnswer');
			queryClient.setQueryData('myAnswer', oldQueryData => {
				return {
					...oldQueryData,
					answers: [...oldQueryData.answers, {_id: nanoid(), ...newAnswer}],
				};
			});
			return {
				previousData,
			};
		},
		onError: (_error, _newAnswer, context) => {
			queryClient.setQueryData('myAnswer', context.previousData);
		},
		onSettled: () => {
			queryClient.invalidateQueries('myAnswer');
		},
	});
};

export const useAddNewQuestion = () => {
	return useMutation(addNewQuestion);
};

export const useSetQuestion = () => {
	const queryClient = useQueryClient();
	return useMutation(setQuestion, {
		onMutate: async newQuestion => {
			await queryClient.cancelQueries('myQuestions', newQuestion._id);
			const previousQuestion = queryClient.getQueryData(['myQuestions', newQuestion._id]);
			queryClient.setQueryData(['myQuestions', newQuestion._id], newQuestion);
			return {previousQuestion, newQuestion};
		},
		onError: (_error, _newAnswer, context) => {
			queryClient.setQueryData(
				['myQuestions', context.newQuestion._id],
				context.previousQuestion
			);
		},
	});
};
