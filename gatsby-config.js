module.exports = {
  siteMetadata: {
    title:'Era Interface',
    description :'Era Interfaces Software Company',
    copyright : 'This website is copyright 2021 Era Interfaces pvt ltd.',
  },
  plugins: [
    // 'gatsby-theme-elements'
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-modal-routing`,
    {
      resolve:`gatsby-plugin-mdx`,
      options: {
        extensions:[`.md`,`.mdx`],
        gatsbyRemarkPlugins:[
          {
            resolve:`gatsby-remark-images`,
            options: {
              maxWidth:1200,
            },
          },
        ]
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
  },
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       name: `posts`,
//       path: `${__dirname}/src/posts`,
//     },
// },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ERA Interfaces Pvt ltd`,
        short_name: `ERA Interfaces`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon:`src/images/era-favicon.jpg`// This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
  
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
  ],
}

