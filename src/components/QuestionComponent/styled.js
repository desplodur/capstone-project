import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(8)};
	background: #517664;
	color: #fff;
	width: 25rem;
	height: 5rem;
	font-size: 1em;
	margin-bottom: ${pxToRem(8)}; ;
`;

export default StyledQuestionComponent;
