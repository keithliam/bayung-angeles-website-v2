import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

interface SiteMetadataQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      image: string
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`

const Seo = () => {
  const data = useStaticQuery<SiteMetadataQueryData>(query)
  const { title, description, siteUrl, image } = data.site.siteMetadata

  const imageUrl = `${siteUrl}${image}`

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@bayungangeles" />
    </Helmet>
  )
}

export default Seo
