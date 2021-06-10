import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Box from '../../components/Box/Box';

import HooksComponent from '../../components/HooksComponent/HooksComponent';
import Slick from '../../components/Slick/Slick';
import VerticalLine from '../../components/VerticalLine/VerticalLine';
import { ContainerDashboard, ContainerMain, DashLine } from './styles';

import { FiXCircle } from 'react-icons/fi';

const Dashboard = () => {
	const [showLine, setShowLine] = useState(true);

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
		}, 8000);

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

								{showLine && <VerticalLine showLine />}
							</>
						);
					})}
					<FiXCircle
						style={{
							// display: showLine && 'none',
							// transition: 'display 0.5s ease',
							backgroundColor: 'white',
							fontSize: '30px',
							borderRadius: '50%',
							margin: '5px',
						}}
					/>
				</ContainerMain>
			</ContainerDashboard>
		</>
	);
};

export default Dashboard;
