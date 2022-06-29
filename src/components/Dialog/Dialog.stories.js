import {useState} from 'react';

import Dialog from '.';

function Template(args) {
	return <Dialog {...args} />;
}

export const Default = Template.bind({});
Default.args = {children: 'Hello World', open: true};

export function Interactive() {
	const [open, setOpen] = useState(true);
	return (
		<>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				Hello World 001
			</Dialog>
			<button
				onClick={() => {
					setOpen(!open);
				}}
			>
				Toggle
			</button>
		</>
	);
}

const story = {
	title: 'Dialog',
	component: Dialog,
};

export default story;
