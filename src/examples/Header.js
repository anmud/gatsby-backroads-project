import React from "react"
import {useStaticQuery} from "gatsby"
import { graphql } from "gatsby"

const siteData = graphql`
query{
    site{
      siteMetadata{
        title
        description
        author
      }
    }
  }
`

const Header = () => {

    const {site} = useStaticQuery(siteData)

  
    return (
        <div>
            <h1>title: {site.siteMetadata.title} </h1>
            <h1>author:  {site.siteMetadata.author} </h1>
        </div>
    )
}



export default Header; 