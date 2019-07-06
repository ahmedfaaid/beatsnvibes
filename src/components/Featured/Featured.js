import React from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import './Featured.css';

const Featured = () => (
	<StaticQuery
		query={graphql`
			query FeaturedQuery {
				allContentfulBlog(
					limit: 1
					sort: { fields: [createdAt], order: DESC }
					filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
				) {
					edges {
						node {
							id
							slug
							title
							shortDescription
							featuredImage {
								fluid(maxWidth: 1200, quality: 85) {
									src
									...GatsbyContentfulFluid
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => (
			<header>
				{data.allContentfulBlog.edges.map((edge) => (
					<div key={edge.node.id} className='Header__section'>
						<div
							className='Header__hero'
							style={{ backgroundImage: `url(${edge.node.featuredImage.fluid.src})` }}
						/>
						<div className='Header__content'>
							<div className='Header__info'>
								<h1 className='Header__title'>{edge.node.title}</h1>
								<p className='Header__subtitle'>{edge.node.shortDescription}</p>
								<button onClick={() => navigate(`/blog/${edge.node.slug}`)} className='btn__med'>
									Read More
								</button>
							</div>
						</div>
					</div>
				))}
			</header>
		)}
	/>
);

export default Featured;
