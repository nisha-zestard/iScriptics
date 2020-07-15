require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {        
    //     baseUrl: "http://phptasks.com/iscriptics",
    //     hostingWPCOM: false,
    //     auth: {
    //       wpcom_user: "admin",
    //       wpcom_pass: '#8SHlvNk%(p8N)LVkX',
    //     },
    //     useACF: true,
    //     perPage: 100,
    //     concurrentRequests: 10,
    //     keepMediaSizes: false,
    //     normalizer: function ({ entities }) {
    //       return entities
    //     },
    //   }
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpgraphql",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://phptasks.com/iscriptics/graphql",
      },
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us10.list-manage.com/subscribe/post?u=b8711d7da2e798d55c4d880bd&amp;id=8b660a523b', // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
