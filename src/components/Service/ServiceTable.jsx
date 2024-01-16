import React from 'react'
import { data } from '../../services'

const ServiceTable = () => {


    return (
        <div className="service-container container" style={{ minheight: '10vh', }}>
            <div className="prin-block" style={{ margin: 0 }}>
                <div className="block-title" style={{ display: 'block', }}>
                    <h2 className=''>НАШИ УСЛУГИ</h2>
                    <hr style={{ width: '100%', margin: 0 }} />
                </div>
            </div>
            <br />
            <div className="prin-block">
                <div className="table-wrapper">
                    {
                        data && data.data?.map((item, index) => (
                            <div className="service-el" key={index}>
                                <div className="col serv-name">
                                    <p>{item.name}</p>
                                </div>
                                <div className="col serv-description">
                                    <p>{item.subdescription}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceTable