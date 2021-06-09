import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Box from '../../components/Box/Box';

import HooksComponent from '../../components/HooksComponent/HooksComponent';
import Slick from '../../components/Slick/Slick';
import VerticalLine from '../../components/VerticalLine/VerticalLine';
import { ContainerDashboard, ContainerMain, DashLine } from './styles';

import { FiXCircle } from 'react-icons/fi';
import { useSpring, animated, config } from 'react-spring';

const Dashboard = () => {
	const [showLine, setShowLine] = useState(true);
	const [flip, set] = useState(false);
	const animatedBox = useSpring({
		to: { height: '110px' },
		from: { height: '0px' },
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

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('setinterval');
			setShowLine(!showLine);
		}, 5000);

		return () => {
			clearInterval(timer);
		};
	}, [showLine]);

	return (
		<>
			<AppBar />
			<ContainerDashboard>
				<Slick />
				<h1>Dashboard</h1>
				<ContainerMain>
					{boxes.map(({ name, id }) => {
						return (
							<>
								<Box key={id}>
									<h3>{name}</h3>
								</Box>

								{showLine && (
									<animated.div
										style={
											(animatedBox,
											{ backgroundColor: 'white', padding: '30px' })
										}
									>
										<DashLine showLine />
									</animated.div>
								)}
							</>
						);
					})}
					<FiXCircle
						style={{
							backgroundColor: 'white',
							fontSize: '30px',
							borderRadius: '50%',
						}}
					/>
				</ContainerMain>
			</ContainerDashboard>
		</>
	);
};

export default Dashboard;
