import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import QuestionDetails from '../components/QuestionDetails';
import UserLogin from '../components/UserLogin';
import withSession from '../session/withSession';

function QuestionDetailPage({session}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<QuestionDetails session={session} />
		</Layout>
	);
}

export default withSession(QuestionDetailPage, <UserLogin />);
