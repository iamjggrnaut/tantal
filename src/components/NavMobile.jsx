import React from 'react'
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'

import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const NavMobile = ({ action }) => {

    const navigate = useNavigate()

    return (
        <div className='navbar-mobile'>
            <div className="container navmob-container d-flex">
                <div className="logo">
                    <img id='logo' src={logo} alt="" onClick={() => navigate('/')} />
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <CiMenuFries className='menu-burger' onClick={() => action.setShown(!action.shown)} />
                    </div>
                    <div className="contact-info" style={{ border: 'none' }}>
                        <div className='d-flex align-items-center mb-3'>

                            <a style={{ fontSize: '2vh', textDecoration: 'none' }} href={`tel:+79801845909`} >
                                <img src={phone} alt="" className='me-2 contact-icon' />
                            </a>
                        </div>
                        <div className='d-flex align-items-center'>
                            <a href={`mailto:tantallazer@yandex.ru`} style={{ fontSize: '2vh', textDecoration: 'none' }}>
                                <img src={email} alt="" className='me-2 contact-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMobile