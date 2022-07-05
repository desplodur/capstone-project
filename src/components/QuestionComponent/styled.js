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

	img {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	Button#smallEditButton {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	Button#closeButton {
		background-color: var(--dark);
		border-radius: 5px;
	}
`;

export default StyledQuestionComponent;
