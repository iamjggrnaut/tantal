import React from 'react'
import data from '../../products'
import { useNavigate } from 'react-router-dom'

const ProductsBlock = () => {

    const navigate = useNavigate()

    return (
        <div className='product-block'>
            <div className="service-container container">
                <div className="block-title" style={{ display: 'block' }}>
                    <h2 className='text-center'>ПРОДУКЦИЯ</h2> <hr style={{ width: '90%' }} />
                </div>

                <div className="product-cards">
                    <div className="row-one">
                        {
                            data && data.data.slice(0, 2).map((item) => (
                                <div className="product-card" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <h5 className='fs-4'>{item.name}</h5>
                                    <p className="text-center">
                                        {item.description}
                                    </p>
                                    <button className='secondary-btn' onClick={() => navigate('/products')}>
                                        Подробнее
                                    </button>
                                </div>))
                        }
                    </div>
                </div>
                <div className="product-cards">
                    <div className="row-one">
                        {
                            data && data.data.slice(2, 4).map((item) => (
                                <div className="product-card" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <h5 className='fs-4'>{item.name}</h5>
                                    <p className="text-center">
                                        {item.description}
                                    </p>
                                    <button className='secondary-btn' onClick={() => navigate('/products')}>
                                        Подробнее
                                    </button>
                                </div>))
                        }
                    </div>
                </div>

                <div className='w-100 d-flex justify-content-center text-center mt-4'>
                    <button className='prime-btn' onClick={() => navigate('/products')}>
                        Вся продукция
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductsBlock