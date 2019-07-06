import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { window } from 'browser-monads';
import Layout from '../components/layout';
import Nav from '../components/Nav/Nav';
import SEO from '../components/seo';
import '../components/Home/Home.css';
import './Archive.css';

import headerImg from '../images/jacques-philippe-gollnick-rave.jpg';

const Tips = (props) => {
	const blogContent = props.data.allContentfulBlog;
	const { currentPage, numPages } = props.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? '/category/tips' : `/category/tips/${currentPage - 1}`;
	const nextPage = `/category/tips/${currentPage + 1}`;

	return (
		<Layout>
			<SEO title='Tips' keywords={[ 'dj', 'dj blog', 'dj equipment', 'dj tips', 'techniques' ]} />
			<Nav />
			<header>
				<div className='Archive__section'>
					<div className='Archive__hero' style={{ backgroundImage: `url(${headerImg})` }} />
					<div className='Archive__nav'>
						<Link
							to='/blog'
							className={
								window.location.href.indexOf('/blog') > 0 ? (
									'Archive__nav--link selected'
								) : (
									'Archive__nav--link'
								)
							}
						>
							All
						</Link>
						<Link
							to='/category/tips'
							className={
								window.location.href.indexOf('category/tips') > 0 ? (
									'Archive__nav--link selected'
								) : (
									'Archive__nav--link'
								)
							}
						>
							Tips
						</Link>
						<Link
							to='/category/news'
							className={
								window.location.href.indexOf('category/news') > 0 ? (
									'Archive__nav--link selected'
								) : (
									'Archive__nav--link'
								)
							}
						>
							News
						</Link>
						<Link
							to='/category/gear'
							className={
								window.location.href.indexOf('category/gear') > 0 ? (
									'Archive__nav--link selected'
								) : (
									'Archive__nav--link'
								)
							}
						>
							Gear
						</Link>
					</div>
				</div>
			</header>

			<div className='Feed'>
				{blogContent.edges.map((edge) => (
					<div
						key={edge.node.id}
						className='Card'
						style={{
							backgroundImage: `linear-gradient(
                                to bottom,
                                rgba(10,10,10,0) 0%,
                                rgba(10,10,10,0) 50%,
                                rgba(10,10,10,0.7) 100%),
                                url(${edge.node.featuredImage.fluid.src}
                            )`
						}}
						onClick={() => navigate(`/blog/${edge.node.slug}`)}
					>
						{edge.node.category.map((category) => <p className='Card__category'>{category.title}</p>)}
						<p className='Card__title'>{edge.node.title}</p>
					</div>
				))}
			</div>

			<div className='Pagination'>
				<div className='Pagination__item'>
					{!isFirst && (
						<Link to={prevPage} rel='prev'>
							<div className='Arrow__back' />
						</Link>
					)}
				</div>
				<div className='Pagination__item'>
					{!isLast && (
						<Link to={nextPage} rel='next'>
							<div className='Arrow__next' />
						</Link>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Tips;

export const pageQuery = graphql`
	query TipsQuery($skip: Int!, $limit: Int!) {
		allContentfulBlog(
			sort: { fields: [createdAt], order: DESC }
			filter: { node_locale: { eq: "en-US" }, category: { elemMatch: { title: { eq: "Tips" } } } }
			skip: $skip
			limit: $limit
		) {
			edges {
				node {
					id
					slug
					title
					createdAt
					category {
						title
						id
					}
					featuredImage {
						fluid(maxWidth: 1200, quality: 85) {
							...GatsbyContentfulFluid
							src
						}
					}
				}
			}
		}
	}
`;
