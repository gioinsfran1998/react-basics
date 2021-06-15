import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectOptions = () => {
	const [state, setState] = useState(null);
	const options = [
		{ value: 'espanol', label: 'Espanol' },
		{ value: 'english', label: 'English' },
		{ value: 'portuguese', label: 'Portuguese' },
	];

	const handleChange = (e) => {
		setState(e.label);
		console.log(e.label);
	};

	const customStyles = {
		option: (provided, state) =>
			// console.log(provided),
			// console.log(state),
			({
				...provided,
				// border: '1px solid black',
				color: 'blue',
				padding: 10,
				backgroundColor: 'transparent',
				'&:hover': {
					backgroundColor: 'red',
				},
			}),
		container: (provided, state) => ({
			...provided,

			borderColor: 'red',
			padding: 10,
			width: '100%',
			maxWidth: '400px',
			color: 'green',
			// border: '1px solid black',
			'&:hover': {
				borderColor: 'red',
			},
			'&:after': {
				borderColor: 'red',
			},
		}),
		input: (provided, state) => (
			console.log(provided),
			{
				...provided,
				color: 'white',
				borderColor: 'red',
			}
		),
		control: (provided, state) => ({
			...provided,
			backgroundColor: 'transparent',
			// border: '1px solid black',
			boxShadow: 'none',
			borderColor: 'green',

			'&:hover': {
				borderColor: 'pink',
			},
		}),

		placeholder: (provided, state) => ({
			...provided,
			color: 'yellow',
			'&:hover': {
				borderColor: 'red',
			},
		}),

		menu: (provided, state) => ({
			...provided,
			// backgroundColor: 'inherit',
		}),
		// indicatorsContainer: (provided, state) => ({
		// 	...provided,
		// 	// border: '1px solid white',
		// 	color: 'blue',
		// 	'&:hover': {
		// 		borderColor: 'red',
		// 	},
		// }),
	};

	return (
		<div>
			<Select
				// width='200px'
				options={options}
				isSearchable='true'
				placeholder='Selecione Idioma'
				defaultValue={state}
				// noOptionsMessage={(state) => state || 'Nada seleccionado'}
				donChange={handleChange}
				styles={customStyles}
			/>
			<h1>{state}</h1>
		</div>
	);
};

export default SelectOptions;
