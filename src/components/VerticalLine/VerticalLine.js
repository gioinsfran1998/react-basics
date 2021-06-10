import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './styles.css';

const VerticalLine = (props, { children }) => {
	const animatedBox = useSpring({
		to: { height: '100px', opacity: 1 },
		from: { height: '0px', opacity: 0 },
		delay: 2500,
		config: config.molasses,
	});
	return (
		<animated.div className='verticalLine' style={animatedBox}>
			{children}
		</animated.div>
	);
};

export default VerticalLine;
