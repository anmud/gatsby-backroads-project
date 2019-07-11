import React from "react"
import {StaticQuery} from "gatsby"
import { graphql } from "gatsby"



const RegularHeader = () => {

   const getSiteData = graphql`
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
  
    return (
        <div>
           <StaticQuery query={getSiteData} render={(data) => {
               
               return <div>
                   <h1>title: {data.site.siteMetadata.title}</h1>
                   </div>
           }}/>
        </div>
    )
}



export default RegularHeader; 