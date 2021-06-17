import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
<<<<<<< HEAD
import Form from '../../components/Form/Form';

import { ContainerDashboard, ContainerMain, DashLine } from './styles';

import { FiXCircle } from 'react-icons/fi';
import { useSpring, animated, config } from 'react-spring';
import AwesomeSliderCo from '../../components/AwesomeSliderCo/AwesomeSliderCo';
import Footer from '../../components/Footer/Footer';
import DivAnimated from '../../components/DivAnimated/DivAnimated';
import MenuBurger from '../../components/MenuBurger/MenuBurger';
import Debounce from '../../components/Debounce/Debounce';

const Dashboard = () => {
	const [showLine, setShowLine] = useState(true);

	const animatedIconCircle = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		// reset: true,
		// reverse: flip,
		delay: 3500,
		config: config.molasses,
	});

=======
import SelectOptions from '../../components/SelectOptions/SelectOptions';

import { ContainerDashboard, ContainerMain, DashLine } from './styles';

const Dashboard = () => {
>>>>>>> 78096462ae3c37f46e882d4cee56120d1f0b3db0
	return (
		<div>
			<AppBar />
			<ContainerDashboard>
<<<<<<< HEAD
				<Debounce />
=======
				<SelectOptions />
>>>>>>> 78096462ae3c37f46e882d4cee56120d1f0b3db0
			</ContainerDashboard>
		</div>
	);
};

export default Dashboard;
