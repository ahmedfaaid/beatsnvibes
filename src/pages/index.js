import React from 'react';
import { Link } from 'gatsby';

import './index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Nav from '../components/Nav/Nav';
import Featured from '../components/Featured/Featured';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Nav />
		<Featured />
		<Home />
		<Link to='/blog' className='Viewmore'>
			View More
		</Link>
		<Footer />
	</Layout>
);

export default IndexPage;
