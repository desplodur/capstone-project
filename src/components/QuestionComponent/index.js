import styledQuestionComponent from './styled';

/**
 *
 * @param {React.ReactNode} children
 * @param {React.HTMLAttributes<HTMLButtonElement>} props
 * @return {JSX.Element}
 * @constructor
 */
export default function QuestionComponent({children}) {
	return <styledQuestionComponent>{children}</styledQuestionComponent>;
}

QuestionComponent.propTypes = {};
