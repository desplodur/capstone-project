export function fetchData() {
	return fetch('/api').then(response => response.json());
}

export function fetchQuestions() {
	return fetch('/api/questions').then(response => response.json());
}
export function fetchAnswers() {
	return fetch('/api/answers').then(response => response.json());
}
export function fetchUsers() {
	return fetch('/api/users').then(response => response.json());
}

export function addNewAnswer(newAnswer) {
	return fetch('/api/answers', {
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

export function setQuestion(newQuestion) {
	fetch(`/api/questions/${newQuestion._id}`, {
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
