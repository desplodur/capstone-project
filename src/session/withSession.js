import {useSession} from '@pforte/react';

export default function withSession(Component, fallback = null) {
	return function WithSession() {
		const session = useSession();
		return session ? <Component session={session} /> : fallback;
	};
}
