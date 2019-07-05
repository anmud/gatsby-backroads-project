import React, {Fragment} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './layout.css'

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </Fragment>
    )
}

export default Layout