import {useQuery} from 'react-query';

import fetchData1 from './useFetch';

export const useData = () => {
	return useQuery('questions', fetchData1);
};
