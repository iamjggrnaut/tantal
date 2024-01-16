import React from 'react'
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer-wrapper">
                <div className='d-flex flex-column'>
                    <img src={logo} id='logo' alt="" />
                    <span>Все права защищены, 2024</span>
                </div>
                <div className="contact-footer" style={{ border: 'none' }}>
                    <div className='d-flex align-items-center mb-3'>
                        <img src={phone} alt="" className='me-2 contact-icon' />
                        <a style={{ fontSize: '2vh', textDecoration: 'none' }} href={`tel:+79801845909`} >+7-980-184-59-09</a>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={email} alt="" className='me-2 contact-icon' />
                        <a href={`mailto:tantallazer@yandex.ru`} style={{ fontSize: '2vh', textDecoration: 'none' }}>tantallazer@yandex.ru</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer