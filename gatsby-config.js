module.exports = {
  siteMetadata: {
    title: `NeuralPy Deep Learning Library`,
    name: `imdeepmind`,
    siteUrl: `https://neuralpy.xyz`,
    description: `A Keras like Deep Learning library that works on top of PyTorch`,
    social: [
      {
        name: `github`,
        url: `https://github.com/imdeepmind/NeuralPy`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['docs'],
      ignoreIndex: false
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 704
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NeuralPy`,
        short_name: `NeuralPy`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#ee4c2c`,
        display: `standalone`,
        icon: 'src/site-icon.png'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`
  ]
};
