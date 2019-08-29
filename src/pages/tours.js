import React from 'react'
import Layout from '../components/Layout'
//import Header from '../examples/Header'
import RegularHeader from '../examples/RegularHeader'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'


const Tours = ({data}) => {

    const image = data.defaultBcg.childImageSharp.fluid

    return (
        <Layout>
            <StyledHero image={image}>
            <p>hello from tours</p>

           <RegularHeader/>

           {/* <Header/> */}
            </StyledHero>
           
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