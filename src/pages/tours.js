import React from 'react'
import Layout from '../components/Layout'
//import Header from '../examples/Header'
import RegularHeader from '../examples/RegularHeader'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import ToursComponent from '../components/Tour/Tours'
import SEO from '../components/SEO'


const Tours = ({data}) => {

    const image = data.defaultBcg.childImageSharp.fluid

    return (
        <Layout>
          <SEO title='Tours'/>
            <StyledHero image={image}>
            

           {/* <RegularHeader/> */}

           {/* <Header/> */}
            </StyledHero>
            <ToursComponent/>
        </Layout>
    )
}

export default Tours;

export const query = graphql`
query{
  defaultBcg: file(relativePath: {eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:4160, quality: 90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`