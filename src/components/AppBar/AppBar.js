import React from 'react';
import { ContainerAppBar, ButtonMenu } from './styles';
import { FiAlignJustify } from 'react-icons/fi';

const AppBar = () => {
	return (
		<ContainerAppBar>
			<ButtonMenu>
				<FiAlignJustify />
			</ButtonMenu>
			<div className='ContainerTitle'>
				<h1>App Bar</h1>
			</div>
		</ContainerAppBar>
	);
};

export default AppBar;
