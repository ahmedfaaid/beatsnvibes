import React from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import './Home.css';

const Home = () => (
	<StaticQuery
		query={graphql`
			query HomeQuery {
				allContentfulBlog(
					limit: 9
					sort: { fields: [createdAt], order: DESC }
					filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
				) {
					edges {
						node {
							id
							slug
							title
							category {
								title
								id
							}
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
			<div className='Feed'>
				{data.allContentfulBlog.edges.map((edge) => (
					<div
						key={edge.node.id}
						className='Card'
						style={{
							backgroundImage: `linear-gradient(
                                to bottom,
                                rgba(10,10,10,0) 0%,
                                rgba(10,10,10,0) 50%,
                                rgba(10,10,10,0.7) 100%),
                                url(${edge.node.featuredImage.fluid.src})`
						}}
						onClick={() => navigate(`/blog/${edge.node.slug}`)}
					>
						{edge.node.category.map((category) => <p className='Card__category'>{category.title}</p>)}
						<p className='Card__title'>{edge.node.title}</p>
					</div>
				))}
			</div>
		)}
	/>
);

export default Home;
