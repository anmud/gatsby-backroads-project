import React from "react"
import {Link} from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'



export default () => {
   return (
    
       <Layout>
     
      <SimpleHero>
        <Banner  
        title="Some Title"  
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
          <Link to="/tours" className="btn-white">explore tours</Link>
        </Banner>
      </SimpleHero>

      <About/>
     
       </Layout>
    
   ) 
} 
