import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import ContactComponent from '../components/Contact/Contact'
import SEO from '../components/SEO'

const Contact = ({data}) => {

  const image = data.connectBcg.childImageSharp.fluid

  return (
      <Layout>
        <SEO title='Contact'/>
        <StyledHero image={image}>
        </StyledHero>
        <ContactComponent/>
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