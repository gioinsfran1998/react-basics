import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Box from '../../components/Box/Box';

import HooksComponent from '../../components/HooksComponent/HooksComponent';
import Slick from '../../components/Slick/Slick';
import VerticalLine from '../../components/VerticalLine/VerticalLine';
import { ContainerDashboard, ContainerMain, DashLine } from './styles';

import { FiXCircle } from 'react-icons/fi';
import { useSpring, animated, config } from 'react-spring';
import AwesomeSliderCo from '../../components/AwesomeSliderCo/AwesomeSliderCo';
import Footer from '../../components/Footer/Footer';
import DivAnimated from '../../components/DivAnimated/DivAnimated';

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

	const boxes = [
		{
			name: 'test1',
			id: 1,
		},
		{
			name: 'test2',
			id: 2,
		},
	];

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		console.log('setinterval');
	// 		setShowLine(!showLine);
	// 	}, 8000);

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, [showLine]);

	return (
		<div>
			<AppBar />
			<ContainerDashboard>
				<div style={{ display: 'flex' }}>
					<ContainerMain>
						{showLine &&
							boxes.map(({ name, id }) => {
								return (
									<>
										<Box key={id}>
											<h3>{name}</h3>
										</Box>

										{showLine && <VerticalLine showLine />}
									</>
								);
							})}
						<animated.div style={animatedIconCircle} className='iconCircle'>
							<FiXCircle
								style={{
									backgroundColor: 'white',
									fontSize: '30px',
									borderRadius: '50%',
									margin: '10px',
								}}
							/>
						</animated.div>
					</ContainerMain>

					<AwesomeSliderCo />
				</div>
				<DivAnimated />
			</ContainerDashboard>
			<Footer />
		</div>
	);
};

export default Dashboard;
