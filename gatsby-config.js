module.exports = {
  siteMetadata: {
    title: "Backroads",
    description: "Explore awesome worldwide tours and discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: '@anmud',
  
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}