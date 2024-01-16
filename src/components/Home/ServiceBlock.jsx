import React from 'react'
import { data } from '../../services'
import { useNavigate } from 'react-router-dom'

const ServiceBlock = () => {

    const navigate = useNavigate()

    return (
        <div className='service-block'>
            <div className="service-container container">
                <div className="block-title">
                    <h2>УСЛУГИ</h2> <hr />
                </div>
                <div className="home-service">
                    {
                        data &&
                        <div className='service-item'>
                            <img src={data?.data[0].image} alt="" />
                            <div>
                                <h3 className="service-title">{data?.data[0].name}</h3>
                                <p className="service-description">
                                    {data?.data[0].description}
                                </p>
                            </div>
                        </div>
                    }
                    {
                        data &&
                        <div className='service-item-reverse'>
                            <div>
                                <h3 className="service-title">{data?.data[1].name}</h3>
                                <p className="service-description">
                                    {data?.data[1].description}
                                </p>
                            </div>
                            <img src={data?.data[1].image} alt="" />
                        </div>
                    }
                    {
                        data &&
                        <div className='service-item'>
                            <img src={data?.data[2].image} alt="" />
                            <div>
                                <h3 className="service-title">{data?.data[2].name}</h3>
                                <p className="service-description">
                                    {data?.data[2].description}
                                </p>
                            </div>
                        </div>
                    }
                </div>
                <div className='w-100 d-flex justify-content-center text-center mt-4'>
                    <button className='prime-btn' onClick={() => navigate('/service')}>
                        Все услуги
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceBlock