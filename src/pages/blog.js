import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

const Blog = ({data}) => {

  const image = data.blogBcg.childImageSharp.fluid

  return (
      <Layout>
        <StyledHero image={image}>
        <p>My Blog</p>
        </StyledHero>
      </Layout>
  )
}




export default Blog;

export const query = graphql`
query{
  blogBcg: file(relativePath: {eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`