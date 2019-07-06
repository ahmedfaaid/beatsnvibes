require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `Beats'n'Vibes`,
		description: `Your one stop website for everything DJing. Get your DJ tips, gear recommendations and news.`,
		author: `Ahmed Faaid`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `n31saotksa7e`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [ `baskerville\:400`, `muli\:300,700` ]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/favicon_io/favicon-32x32.png',
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: false
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
