import React from 'react'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png"


import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const ContactBlock = () => {

    const position = [55.618496, 36.990135]
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [30, 46],
        iconAnchor: [17, 46]
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <div className='product-block' style={{ minHeight: '75vh' }}>
            <div className="service-container container">
                <div className="block-title" style={{ display: 'block' }}>
                    <h2 className='text-center'>КОНТАКТЫ</h2> <hr style={{ width: '90%' }} />
                </div>
                <div className="contact-container">
                    <div>
                        <div className="d-flex align-items-center">
                            <h2 className='fw-bold'>ТАНТАЛ</h2>
                        </div>
                        <div className="contact-info">
                            <p style={{ color: 'white' }}>Одинцовский р-н г.Голицино, <br /> Звенигородское ш. д. 15Б</p>
                        </div>
                        <div className="contact-info mt-4">
                            <div className='d-flex align-items-center mb-3'>
                                <img src={phone} alt="" className='me-2 contact-icon' />
                                <a style={{ fontSize: '2vh', textDecoration: 'none' }} href={`tel:+79801845909`} >+7-980-184-59-09</a>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img src={email} alt="" className='me-2 contact-icon' />
                                <a href={`mailto:tantallazer@yandex.ru`} style={{ fontSize: '2vh', textDecoration: 'none' }}>tantallazer@yandex.ru</a>
                            </div>
                            <div className='d-flex' style={{ marginTop: '20px' }}>
                                <a href="https://wa.me/+79801845909" target='_blank' className='me-3' style={{ fontSize: '24px', color: 'white' }}><FaWhatsapp /></a>
                                <a href="https://t.me/+79801845909" target='_blank' style={{ fontSize: '24px', color: 'white' }}><FaTelegram /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactBlock
