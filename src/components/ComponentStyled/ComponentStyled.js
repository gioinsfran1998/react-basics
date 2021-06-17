import React, { useState } from 'react';
import * as S from './styled';

const ComponentStyled = () => {
	const [show, setshow] = useState(false);
	console.log(show);
	return (
		<S.Container>
			<S.Button onClick={() => setshow(!show)}>Click</S.Button>

			<S.Box>Content</S.Box>
		</S.Container>
	);
};

export default ComponentStyled;
