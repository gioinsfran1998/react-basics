import React from 'react';
import Slider from 'react-slick';
import { Box, div, ImgBanner } from './styles';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.png';

const Slick = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div>
			<Slider {...settings} className='slider'>
				<Box href='https://aposta.la/'>
					<ImgBanner src={image1} />
				</Box>
				<Box>
					<ImgBanner src={image2} />
				</Box>
				<Box>
					<ImgBanner src={image3} />
				</Box>
			</Slider>
		</div>
	);
};

export default Slick;
