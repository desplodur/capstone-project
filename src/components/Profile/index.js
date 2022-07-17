import {useStore} from '../../hooks/useStore';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const activeUser = useStore(state => state.activeUser);

	return (
		<StyledProfile>
			<article>
				<h1>{'Username: ' + activeUser.userName}</h1>
			</article>
		</StyledProfile>
	);
}
