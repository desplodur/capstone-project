import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledQuestionComponent = styled.section`
	width: 20rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(8)};
`;

export default StyledQuestionComponent;
