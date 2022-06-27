import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionComponent from '../components/QuestionComponent';
import {useStore} from '../hooks/useStore';

export default function QuestionPage() {
	const questions = useStore(state => state.questions);

	const addAnswer = (event, id) => {
		event.preventDefault();
		const index = questions.findIndex(question => {
			return id === question.id;
		});
		const newAnswer = {
			id: nanoid(),
			answerText: event.target.inputField.value,
		};
		const newQuestions = [...questions];
		newQuestions[index].answers = [...newQuestions[index].answers, newAnswer];
		//addNewAnswer(newQuestions);
	};

	return (
		<Layout>
			<Helmet>
				<title key="title">Question Area</title>
				<meta
					key="description"
					name="description"
					content="Here you can see all the Questions"
				/>
			</Helmet>
			<article>
				{questions.map(question => {
					return (
						<QuestionComponent
							key={question.id}
							question={question}
							addAnswer={addAnswer}
						/>
					);
				})}
			</article>
		</Layout>
	);
}
