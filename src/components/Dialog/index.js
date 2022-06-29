import StyledDialog from './styled';

export default function Dialog({children, open}) {
	return <StyledDialog open={open}>{children}</StyledDialog>;
}
