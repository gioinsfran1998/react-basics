import React, { Children } from 'react';
import { BoxContent } from './styles';

const Box = ({ children }) => {
	return <BoxContent>{children}</BoxContent>;
};

export default Box;
