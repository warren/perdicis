const { SUBSITE_URL } = require('./config/util/subsite');

module.exports = {
  siteMetadata: {
    title: `Perdicis`,
    siteUrl: SUBSITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["SUBSITE"]
      },
    }
  ],
}


