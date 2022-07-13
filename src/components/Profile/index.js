import {signOut} from '@pforte/client';
import {useSession} from '@pforte/react';
import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import Button from '../Button';
import Dialog from '../Dialog';
import Form from '../Form';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const users = useStore(state => state.users.data);
	const activeUser = useStore(state => state.activeUser);
	const setActiveUser = useStore(state => state.setActiveUser);
	const changeUsername = useStore(state => state.changeUsername);
	const [toggle, setToggle] = useState(true);
	const [open, setOpen] = useState(false);
	const session = useSession();

	function changeActiveUser() {
		users.forEach(user => {
			if (user._id !== activeUser._id) {
				setActiveUser(user);
			}
		});
	}

	const handleSubmit = event => {
		event.preventDefault();
		const newUser = users.find(user => {
			if (activeUser._id === user._id) {
				return user;
			}
			return null;
		});
		newUser.userName = event.target.inputField.value;
		changeUsername(activeUser._id, newUser);
		setToggle(!toggle);
		setOpen(!open);
		setTimeout(() => {
			setOpen(false);
		}, 1000);
		event.target.reset();
	};
	console.log(session);
	return (
		<StyledProfile>
			<label>
				<Button greyButton={true} onClick={changeActiveUser}>
					Switch user
				</Button>
			</label>
			<article>
				{session && <img src={session.user.image} alt={session.user.name} />}
				{toggle ? (
					<h1>Username {session?.user.name ?? 'Loading...'}</h1>
				) : (
					<Form
						onSubmit={handleSubmit}
						placeholderText={activeUser.userName}
						submitButtonText={'Change your Username'}
					/>
				)}
				<Dialog open={open}>
					<h3>Username changed</h3>
				</Dialog>
				<Button
					editButtonBig={true}
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="img"
						width="4em"
						height="4em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path strokeDasharray="20" strokeDashoffset="20" d="M3 21H21">
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									dur="0.3s"
									values="20;0"
								/>
							</path>
							<path
								strokeDasharray="44"
								strokeDashoffset="44"
								d="M7 17V13L17 3L21 7L11 17H7"
							>
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									begin="0.4s"
									dur="0.6s"
									values="44;0"
								/>
							</path>
							<path strokeDasharray="8" strokeDashoffset="8" d="M14 6L18 10">
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									begin="1s"
									dur="0.2s"
									values="8;0"
								/>
							</path>
						</g>
					</svg>
				</Button>
				<button
					type="button"
					onClick={() => {
						void signOut('github');
					}}
				>
					Sign In with GitHub
				</button>
			</article>
		</StyledProfile>
	);
}
