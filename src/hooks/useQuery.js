import {nanoid} from 'nanoid';
import {useQuery, useMutation, useQueryClient} from 'react-query';

import {fetchData1} from './useFetch';
import {addNewAnswer} from './useFetch';

export const useData = (onSuccess, onError) => {
	return useQuery('myData', fetchData1, {
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
			console.log(previousData);
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

		// onSuccess: data => {
		// 	queryClient.setQueryData('myData', oldQueryData => {
		// 		return {...oldQueryData, answers: [...oldQueryData.answers, data.newAnswer]};
		// 	});
		// },
	});
};
