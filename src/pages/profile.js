import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import ProfileComponent from '../components/Profile';
import UserLogin from '../components/UserLogin';
import withSession from '../session/withSession';

function ProfilePage({session}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<ProfileComponent session={session} />
		</Layout>
	);
}
export default withSession(ProfilePage, <UserLogin />);
