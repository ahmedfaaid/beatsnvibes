import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/dj-logo.png';
import './Nav.css';

const Nav = () => (
	<nav className='Nav'>
		<div className='Nav__items'>
			<a className='Nav__item--left' href='/'>
				<img src={logo} alt='dj-logo' className='Nav__item--logo' />
			</a>
			<Link
				className={
					window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? (
						'Nav__item--link active'
					) : (
						'Nav__item--link'
					)
				}
				to='/blog'
			>
				Blog
			</Link>
			<Link
				className={window.location.href.indexOf('about') > 0 ? 'Nav__item--link active' : 'Nav__item--link'}
				to='/about'
			>
				About
			</Link>
			<Link
				className={window.location.href.indexOf('contact') > 0 ? 'Nav__item--link active' : 'Nav__item--link'}
				to='/contact'
			>
				Contact
			</Link>
		</div>
	</nav>
);

export default Nav;
