import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/Nav/Nav';

import './contact.css';

const Thanks = () => (
	<Layout>
		<Nav />
		<div className='Contact__header' />
		<div className='Contact__thanks'>
			<h1>Thank you. We'll be in touch soon.</h1>
		</div>
	</Layout>
);

export default Thanks;
