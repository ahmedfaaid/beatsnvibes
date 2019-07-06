const path = require(`path`);

const makeRequest = (graphql, request) =>
	new Promise((resolve, reject) => {
		// Query for nodes to use in creating pages
		resolve(
			graphql(request).then((result) => {
				if (result.errors) {
					reject(result.erros);
				}
				return result;
			})
		);
	});

// Implement the Gatsby API "createPages". This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	// Create pages for each blog.
	const getBlog = makeRequest(
		graphql,
		`
        {
            allContentfulBlog (
                sort: { fields: [createdAt], order: DESC }
                filter: {
                    node_locale: {eq: "en-US"}
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `
	).then((result) => {
		result.data.allContentfulBlog.edges.forEach(({ node }) => {
			createPage({
				path: `/blog/${node.slug}`,
				component: path.resolve(`src/templates/Blog.js`),
				context: {
					id: node.id
				}
			});
		});
	});

	// Create archive page for all blogs.
	const getArchive = makeRequest(
		graphql,
		`
        {
            allContentfulBlog (
                sort: { fields: [createdAt], order: DESC }
                filter: {
                    node_locale: {eq: "en-US"}
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `
	).then((result) => {
		const blogs = result.data.allContentfulBlog.edges;
		const blogsPerPage = 9;
		const numPages = Math.ceil(blogs.length / blogsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `blog` : `/blog/${i + 1}`,
				component: path.resolve('./src/templates/Archive.js'),
				context: {
					limit: blogsPerPage,
					skip: i * blogsPerPage,
					numPages,
					currentPage: i + 1
				}
			});
		});
	});

	// Create tips category page, including pagination
	const getTips = makeRequest(
		graphql,
		`
        {
            allContentfulBlog (
                sort: { fields: [createdAt], order: DESC }
                filter: {
					node_locale: {eq: "en-US"}
					category: {elemMatch: {title: {eq: "Tips"}}}
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `
	).then((result) => {
		const blogs = result.data.allContentfulBlog.edges;
		const blogsPerPage = 9;
		const numPages = Math.ceil(blogs.length / blogsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `category/tips` : `category/tips/${i + 1}`,
				component: path.resolve('./src/templates/Tips.js'),
				context: {
					limit: blogsPerPage,
					skip: i * blogsPerPage,
					numPages,
					currentPage: i + 1
				}
			});
		});
	});

	// Create news category page, including pagination
	const getNews = makeRequest(
		graphql,
		`
        {
            allContentfulBlog (
                sort: { fields: [createdAt], order: DESC }
                filter: {
					node_locale: {eq: "en-US"}
					category: {elemMatch: {title: {eq: "News"}}}
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `
	).then((result) => {
		const blogs = result.data.allContentfulBlog.edges;
		const blogsPerPage = 9;
		const numPages = Math.ceil(blogs.length / blogsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `category/news` : `category/news/${i + 1}`,
				component: path.resolve('./src/templates/News.js'),
				context: {
					limit: blogsPerPage,
					skip: i * blogsPerPage,
					numPages,
					currentPage: i + 1
				}
			});
		});
	});

	// Create gear category page, including pagination
	const getGear = makeRequest(
		graphql,
		`
        {
            allContentfulBlog (
                sort: { fields: [createdAt], order: DESC }
                filter: {
					node_locale: {eq: "en-US"}
					category: {elemMatch: {title: {eq: "Gear"}}}
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `
	).then((result) => {
		const blogs = result.data.allContentfulBlog.edges;
		const blogsPerPage = 9;
		const numPages = Math.ceil(blogs.length / blogsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `category/gear` : `category/gear/${i + 1}`,
				component: path.resolve('./src/templates/Gear.js'),
				context: {
					limit: blogsPerPage,
					skip: i * blogsPerPage,
					numPages,
					currentPage: i + 1
				}
			});
		});
	});

	return Promise.all([ getBlog, getArchive, getTips, getNews, getGear ]);
};
