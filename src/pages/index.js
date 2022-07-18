import {Helmet} from 'react-helmet';

import CreateQuestion from '../components/CreateQuestion';
import Layout from '../components/Layout';
import UserLogin from '../components/UserLogin';
import withSession from '../session/withSession';

function HomePage({session}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<CreateQuestion session={session} />
		</Layout>
	);
}
export default withSession(HomePage, <UserLogin />);
