import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	position: relative;
	width: 80vw;
	margin: 0.5em 0 0.5em 0;
	border: 2px solid var(--dark);
	border-radius: ${pxToRem(8)};
	background-color: var(--blue);
	color: var(--light);
`;

export default StyledQuestionComponent;
