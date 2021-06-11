import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './styles.css';

const VerticalLine = (props, { children }) => {
	const animatedBox = useSpring({
		to: { height: '100px' },
		from: { height: '0px' },
		delay: 2500,
		config: config.molasses,
		onRest: {
			height: () => console.log('finalizado==>'),
		},
	});
	return (
		<animated.div className='verticalLine' style={animatedBox}>
			{children}
		</animated.div>
	);
};

export default VerticalLine;
