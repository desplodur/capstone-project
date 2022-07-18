import {Helmet} from 'react-helmet';

import CreateQuestion from '../components/CreateQuestion';
import Layout from '../components/Layout';
<<<<<<< HEAD
import UserLogin from '../components/UserLogin';
import withSession from '../session/withSession';

function HomePage({session}) {
=======

export default function HomePage() {
>>>>>>> main
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
<<<<<<< HEAD
			<CreateQuestion session={session} />
=======
			<CreateQuestion />
>>>>>>> main
		</Layout>
	);
}
export default withSession(HomePage, <UserLogin />);
