import React from 'react'
import Navbar from '../components/Navbar'
import ServiceHero from '../components/Service/ServiceHero'
import ServiceTable from '../components/Service/ServiceTable'
import Footer from '../components/Footer'
import NavMobile from '../components/NavMobile'
import MobileMenu from '../components/MobileMenu'

const Service = ({ action }) => {

    return (
        <div className='service-page'>
            <Navbar />
            <NavMobile action={action} />
            <MobileMenu action={action} />
            <ServiceHero />
            <ServiceTable />
            <Footer />
        </div>
    )
}

export default Service