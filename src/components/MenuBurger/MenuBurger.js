import React, { useState } from 'react';
import { ContainerHambur, ButtonMenu, NavMenu } from './styles';
import { AiOutlineMenu } from 'react-icons/ai';

const MenuBurger = () => {
	const [open, setOpen] = useState(false);

	const handleToggleMenu = (e) => {
		setOpen(!open);
		console.log(open);
	};

	return (
		<ContainerHambur>
			<ButtonMenu onClick={handleToggleMenu} id='Btn'>
				<AiOutlineMenu />
			</ButtonMenu>
			<NavMenu
				style={{ display: 'flex', flexFlow: 'column' }}
				open={open}
				id='nav'
			>
				<a href='https://example.com'>Website</a>
				<a href='https://example.com'>Website</a>
				<a href='https://example.com'>Website</a>
			</NavMenu>
		</ContainerHambur>
	);
};

export default MenuBurger;
