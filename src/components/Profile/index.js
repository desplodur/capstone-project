import {useState} from 'react';

import {useStore} from '../../hooks/useStore';
import Button from '../Button';
import Dialog from '../Dialog';
import Form from '../Form';

import StyledProfile from './styled';

export default function ProfileComponent() {
	const users = useStore(state => state.users);
	const activeUser = useStore(state => state.activeUser);
	const setActiveUser = useStore(state => state.setActiveUser);
	const changeUsername = useStore(state => state.changeUsername);
	const [toggle, setToggle] = useState(true);
	const [open, setOpen] = useState(false);

	function changeActiveUser() {
		users.map(user => {
			if (user !== activeUser) {
				setActiveUser(user);
			}
			return user;
		});
	}
	const setNewUsername = event => {
		event.preventDefault();
		changeUsername(activeUser.userID, event.target.inputField.value);
		event.target.reset();
	};

	return (
		<StyledProfile>
			<label>
				<Button greyButton={true} onClick={changeActiveUser}>
					Switch user
				</Button>
			</label>
			<article id="userInformation">
				{toggle ? (
					<h1>{'Username: ' + activeUser.userName}</h1>
				) : (
					<Form
						onSubmit={event => {
							setNewUsername(event);
							setToggle(!toggle);
							setOpen(!open);
							setTimeout(() => {
								setOpen(false);
							}, 1000);
						}}
						placeholderText={activeUser.userName}
						submitButtonText={'Change your Username'}
					/>
				)}
				<Dialog open={open}>
					<h3>Username changed</h3>
				</Dialog>
				<Button
					id="bigEditButton"
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
			</article>
		</StyledProfile>
	);
}
