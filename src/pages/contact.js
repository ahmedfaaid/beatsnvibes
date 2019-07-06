import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/Nav/Nav';
import SEO from '../components/seo';

import './contact.css';

const Contact = () => (
	<Layout>
		<SEO title='Contact' description='If you have any inquiries, contact Beats&#39;n&#39;Vibes' />
		<Nav />
		<div className='Contact__header' />
		<div className='Contact__section'>
			<div className='Contact__form'>
				<h1>Contact</h1>
				<div className='Inner'>
					<form method='POST' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
						<input type='hidden' name='form-name' value='contact' />
						<div className='Field__hidden'>
							<label>Don't fill this out, human</label>
							<input name='bot' />
						</div>
						<div className='Field'>
							<label>Name</label>
							<input type='text' name='name' />
						</div>
						<div className='Field'>
							<label>Email</label>
							<input type='text' name='email' />
						</div>
						<div className='Field'>
							<label>Message</label>
							<textarea name='message' rows='6' />
						</div>
						<div className='Submit'>
							<button type='submit' className='btn__med'>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</Layout>
);

export default Contact;
