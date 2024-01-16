import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const MobileMenu = ({ action }) => {

    const loc = document.location.href?.split('/').reverse() || []
    const location = loc && loc.length ? loc[0] : ''

    const getList = (href) => {
        switch (href) {
            case '':
                return (
                    <div className="menu-links">
                        <Link onClick={() => action.setShown(false)} to={'/about'}>О НАС</Link>
                        <Link onClick={() => action.setShown(false)} to={'/service'}>УСЛУГИ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/products'}>ПРОДУКЦИЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/contact'}>КОНТАКТЫ</Link>
                    </div>
                )
            case 'about':
                return (
                    <div className="menu-links">
                        <Link onClick={() => action.setShown(false)} to={'/'}>ГЛАВНАЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/service'}>УСЛУГИ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/products'}>ПРОДУКЦИЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/contact'}>КОНТАКТЫ</Link>
                    </div>
                )
            case 'service':
                return (
                    <div className="menu-links">
                        <Link onClick={() => action.setShown(false)} to={'/'}>ГЛАВНАЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/about'}>О НАС</Link>
                        <Link onClick={() => action.setShown(false)} to={'/products'}>ПРОДУКЦИЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/contact'}>КОНТАКТЫ</Link>
                    </div>
                )
            case 'products':
                return (
                    <div className="menu-links">
                        <Link onClick={() => action.setShown(false)} to={'/'}>ГЛАВНАЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/about'}>О НАС</Link>
                        <Link onClick={() => action.setShown(false)} to={'/service'}>УСЛУГИ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/contact'}>КОНТАКТЫ</Link>
                    </div>
                )
            case 'contact':
                return (
                    <div className="menu-links">
                        <Link onClick={() => action.setShown(false)} to={'/'}>ГЛАВНАЯ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/about'}>О НАС</Link>
                        <Link onClick={() => action.setShown(false)} to={'/service'}>УСЛУГИ</Link>
                        <Link onClick={() => action.setShown(false)} to={'/products'}>ПРОДУКЦИЯ</Link>
                    </div>
                )
        }
    }

    return (
        <div className={action.shown ? 'mobile-menu menu-shown' : 'mobile-menu'}>
            <div className="d-flex justify-content-end w-100 p-5" onClick={() => action.setShown(!action.shown)}>
                <span className='text-right'>X</span>
            </div>
            <br />
            <img src={logo} alt="" />
            <br />
            {getList(location)}
        </div>
    )
}

export default MobileMenu
