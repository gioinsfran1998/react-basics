import React, { useState } from 'react';
// import { BoxContent } from './styles';
import { useSpring, animated, config } from 'react-spring';
import './styles.css';

const Box = ({ children }) => {
	const [flip, set] = useState(false);
	const animatedDiv = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		// reset: true,
		// reverse: flip,
		delay: 1500,
		config: config.molasses,
		// onRest: () => set(!flip),
	});

	return (
		<animated.div style={animatedDiv} className='boxContent'>
			{children}
		</animated.div>
	);
};

export default Box;
