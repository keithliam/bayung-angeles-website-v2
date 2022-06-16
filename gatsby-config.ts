import type { GatsbyConfig } from 'gatsby'

const siteTitle = 'Báyung Ángeles – Join the movement!'
const siteDescription =
  'Báyung Ángeles is a community advocating social change through responsible, effective, and transparent public governance.'
const siteUrl = 'https://www.bayungangeles.org'

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: siteTitle,
        description: siteDescription,
        language: 'en',
        twitter: {
          cardType: 'summary_large_image',
          site: '@bayungangeles',
        },
        openGraph: {
          title: siteTitle,
          description: siteDescription,
          type: 'website',
          url: siteUrl,
          images: [
            {
              url: `${siteUrl}/preview.png`,
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/ba-logo-bg.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
  ],
}

export default config
