import React from 'react';
import { GlobalStyle } from './assets/GlobalStyle';
import Dashboard from './pages/Dashboard/Dashboard';
import './components/test';

function App() {
	return (
		<div
			style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
		>
			<GlobalStyle />
			<Dashboard />
		</div>
	);
}

export default App;
