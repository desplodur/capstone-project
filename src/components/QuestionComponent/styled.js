import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	width: 20rem;
	margin: 0.5em 0 0.5em 0;
	padding: 0.5em 0.2em 0.5em 0.2em;
	background-color: var(--blue);
	border: 2px solid var(--dark);
	border-radius: ${pxToRem(8)};
	color: var(--light);
`;

export default StyledQuestionComponent;
