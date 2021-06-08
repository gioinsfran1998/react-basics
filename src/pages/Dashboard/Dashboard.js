import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ClassComponent from '../../components/ClassComponent/ClassComponent';
import HooksComponent from '../../components/HooksComponent/HooksComponent';
import { ContainerDashboard } from './styles';

const Dashboard = () => {
	return (
		<ContainerDashboard>
			<AppBar />
			<h1>Dashboard</h1>
			{/* <ClassComponent /> */}
			<HooksComponent />
		</ContainerDashboard>
	);
};

export default Dashboard;
