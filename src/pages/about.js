import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/Nav/Nav';
import SEO from '../components/seo';

import './about.css';

const About = () => (
	<Layout>
		<SEO title='About' description='About Beats&#39;n&#39;Vibes' />
		<Nav />
		<div className='About__header'>
			<div className='About__hero' />
			<div className='About__info'>
				<h1 className='About__title'>About</h1>
			</div>
		</div>
		<div className='About__wrapper'>
			<div className='About__content'>
				<h1>Beats'N'Vibes</h1>
				<p>Beats'n'Vibes is a fictional dj blog built using Gatsby</p>
				<h3>Technologies/Libraries</h3>
				<ul>
					<li>GatsbyJS</li>
					<li>GraphQL</li>
					<li>Contentful CMS</li>
				</ul>
				<p style={{ fontSize: '14px' }}>
					Disclaimer:{' '}
					<em>
						I do not own any of the images and icons used in the blog. Most of the images were sourced
						through Unsplash and Pexels with a few from Google Images
					</em>
				</p>
			</div>
		</div>
	</Layout>
);

export default About;
