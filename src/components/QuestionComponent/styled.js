import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	background-color: var(--blue);
	width: 20rem;
	border: 2px solid var(--dark);
	border-radius: ${pxToRem(8)};
	padding: 0.5em 0.2em 0.5em 0.2em;
	margin: 0.5em 0 0.5em 0;
	color: var(--light);
`;

export default StyledQuestionComponent;
