import React from 'react';
import './Footer.css';

import footer from '../../images/pixabay-footer.jpg';

const Footer = () => (
	<div
		className='Footer__hero'
		style={{
			backgroundImage: `linear-gradient(
            to bottom,
            rgba(10,10,10,1) 0%,
            rgba(10,10,10,0.9) 80%,
            rgba(10,10,10,1) 100%),
            url(${footer})`
		}}
	/>
);

export default Footer;
