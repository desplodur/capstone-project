import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledForm = styled.form`
	width: 25rem;
	margin-bottom: ${pxToRem(8)};
	padding: 0.5em 1em;
	font-size: 1em;
`;

export default StyledForm;
