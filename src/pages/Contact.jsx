import React from 'react'
import Navbar from '../components/Navbar'
import ContactBlock from '../components/Home/ContactBlock'
import Footer from '../components/Footer'
import NavMobile from '../components/NavMobile'
import MobileMenu from '../components/MobileMenu'

const Contact = ({ action }) => {

    return (
        <div className='home-page'>
            <Navbar />
            <NavMobile action={action} />
            <MobileMenu action={action} />
            <ContactBlock />
            <Footer />
        </div>
    )
}

export default Contact