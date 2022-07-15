import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionDetails from '../components/QuestionDetails';

export default function QuestionDetailPage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<QuestionDetails />
		</Layout>
	);
}
