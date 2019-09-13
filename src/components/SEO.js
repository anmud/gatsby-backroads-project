import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={defaultImage} />
      
      {/* facebook card */}
      <meta property='og:url' content={siteUrl}/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={siteTitle}/>
      <meta property='og:description' content={siteDesc}/>
      <meta property='og:image' content={`${siteUrl}${defaultImage}`}/>
      <meta property='og:image:with' content='400'/>
      <meta property='og:height' content='300'/>

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${defaultImage}`} />
    </Helmet>
  )
}

export default SEO
