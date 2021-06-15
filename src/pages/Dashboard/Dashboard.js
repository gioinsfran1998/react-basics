import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import SelectOptions from '../../components/SelectOptions/SelectOptions';

import { ContainerDashboard, ContainerMain, DashLine } from './styles';

const Dashboard = () => {
	return (
		<div>
			<AppBar />
			<ContainerDashboard>
				<SelectOptions />
			</ContainerDashboard>
		</div>
	);
};

export default Dashboard;
