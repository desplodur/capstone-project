export function fetchData1() {
	return fetch('../../api').then(response => response.json());
}

export function addNewAnswer(newAnswer) {
	fetch('../../api/answers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newAnswer),
	}).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("Server response wasn't OK");
		}
	});
}

export function setQuestion(questionID, newQuestion) {
	fetch(`../../api/questions/${questionID}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newQuestion),
	}).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("Server response wasn't OK");
		}
	});
}
