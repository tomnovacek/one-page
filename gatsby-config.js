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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ZNG88DVZG8", // GA4
          "4630461147" // stream ID
          // GA can be added to the array too
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        }
      }
    },
/*     {
      resolve: 'gatsby-source-googlemaps-geocoding',
      options: {
        key: 'AIzaSyBMmvxIKMln3ERYD6S48poPIRoJfS4jQbk',
        address: 'Pekařská 18, Brno, Czechia'
      },
    }, */
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
