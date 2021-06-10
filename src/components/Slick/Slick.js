import React from 'react';
import Slider from 'react-slick';
import { Box, div, ImgBanner } from './styles';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.png';
import './styles.css';

const Slick = () => {
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		className: 'slide',

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{/* <Box href='https://aposta.la/'> */}
			<ImgBanner src={image1} />
			{/* </Box>
			<Box>
				<ImgBanner src={image2} />
			</Box>
			<Box>
				<ImgBanner src={image3} />
			</Box> */}
		</Slider>
	);
};

export default Slick;
