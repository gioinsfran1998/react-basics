import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { ImgBanner2 } from './styles';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.png';

const AwesomeSliderCo = () => {
	const AutoplaySlider = withAutoplay(AwesomeSlider);
	return (
		<AutoplaySlider
			organicArrows={false}
			bullets={false}
			play={true}
			cancelOnInteraction={false}
			interval={10000}
			style={{ height: '150px' }}
		>
			<ImgBanner2 data-src={image1} />
			<ImgBanner2 data-src={image2} />
			<ImgBanner2 data-src={image3} />
		</AutoplaySlider>
	);
};

export default AwesomeSliderCo;
