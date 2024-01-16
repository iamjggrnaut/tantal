import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../products'
import ProductLine from '../components/Products/ProductLine'
import NavMobile from '../components/NavMobile'
import MobileMenu from '../components/MobileMenu'


const Products = ({ action }) => {

    return (
        <div className='products-page'>
            <Navbar />
            <NavMobile action={action} />
            <MobileMenu action={action} />
            <div className="prin-block" style={{ margin: 0, paddingTop: '100px' }}>
                <div className="block-title" style={{ display: 'block', }}>
                    <h2 className=''>НАИБОЛЕЕ ПОПУЛЯРНАЯ ПРОДУКЦИЯ</h2>
                    <hr style={{ width: '90%', margin: 0 }} />
                </div>
            </div>
            <div className="prin-block" style={{ margin: 0, paddingTop: '100px' }}>
                {
                    data && data.data?.map((item, index) => (
                        <ProductLine item={item} key={index} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Products