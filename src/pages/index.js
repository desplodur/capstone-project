import {Helmet} from 'react-helmet';

import CreateQuestion from '../components/CreateQuestion';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Profile</title>
				<meta key="description" name="description" content="Take a look at your profile" />
			</Helmet>
			<CreateQuestion />
		</Layout>
	);
}
