import StyledButton from './styled';

export default function Button({children, type = 'button', ...props}) {
	return (
		<StyledButton type={type} {...props}>
			{children}
		</StyledButton>
	);
}

Button.propTypes = {};
