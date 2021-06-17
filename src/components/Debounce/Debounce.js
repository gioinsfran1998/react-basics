import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

const Debounce = () => {
	const [text, setText] = useState('');
	const [debouncedText] = useDebounce(text, 2000);
	return (
		<div>
			<h1>Debounce</h1>
			<button>Debounce</button>
			<input
				onChange={(e) => {
					console.log(e.target.value);
					setText(e.target.value);
				}}
			/>
			<h1>Actual value: {text}</h1>
			<h1>Debounced value: {debouncedText}</h1>
		</div>
	);
};

export default Debounce;
