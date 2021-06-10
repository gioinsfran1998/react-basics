import React, { useState } from 'react';
import { LineVertical } from './styles';
import { useSpring, animated, config } from 'react-spring';
import './styles.css';

const VerticalLine = (props, { children }) => {
	const [flip, set] = useState(false);
	const animatedBox = useSpring({
		to: { height: '100px', opacity: 1 },
		from: { height: '0px', opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 1000,
		config: config.molasses,
		onRest: () => set(!flip),
	});
	return (
		<animated.div
			// style={
			// 	({
			// 		borderLeft: '2px dashed green',
			// 		height: '100px',
			// 		position: 'relative',
			// 		background: 'red',
			// 	},
			// 	animatedBox)
			// }
			className='verticalLine'
			style={animatedBox}
		>
			{children}
		</animated.div>
	);
};

export default VerticalLine;
