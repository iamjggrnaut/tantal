import React from 'react'

const ProductLine = ({ item }) => {

    return (
        <div className='product-el'>
            <div className='col'>
                <img src={item.image} alt="" />
            </div>
            <div className='prod-info col'>
                <h4 className="fw-bold fs-4">
                    {item.name}
                </h4>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ProductLine