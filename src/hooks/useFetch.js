export default function fetchData1() {
	return fetch('../../api').then(response => response.json());
}
