import StyledAnswerCard from './styled';

export default function AnswerCard({children, ...props}) {
	return <StyledAnswerCard {...props}>{children}</StyledAnswerCard>;
}

AnswerCard.propTypes = {};
