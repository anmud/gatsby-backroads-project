import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

const Contact = ({data}) => {

  const image = data.connectBcg.childImageSharp.fluid

  return (
      <Layout>
        <StyledHero image={image}>
        <p>My Contact page</p>
        </StyledHero>
      </Layout>
  )
}

export default Contact;

export const query = graphql`
query{
  connectBcg: file(relativePath: {eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`