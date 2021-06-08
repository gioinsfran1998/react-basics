import React, { useEffect, useState } from 'react';

const HooksComponent = () => {
	const [state, setstate] = useState(0);

	useEffect(() => {
		document.getElementById('h1').innerHTML = `===> ${state}`;
		console.log('COMPONENTE');
	});

	return (
		<>
			<button onClick={() => setstate(state + 1)}>Boton</button>
			<h1 id='h1'></h1>
		</>
	);
};

export default HooksComponent;
