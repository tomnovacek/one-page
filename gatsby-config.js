module.exports = {
  siteMetadata: {
    title: "Mgr. Ing. Tomáš Nováček - psycholog, kouč, psychoterapeut",
    author: "Tom Novacek",
    description: "Nabízím odborné služby psychologa, kouče a psychoterapeuta v Brně."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tomáš Nováček - psycholog; Brno',
        short_name: 'Psycholog-Brno',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
