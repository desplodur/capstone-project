import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';
import ProfileComponent from '../components/ProfileComponent';

export default function ProfilePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<ProfileComponent />
		</Layout>
	);
}
