import React from 'react'
import logo from '../assets/logo-min.png'

const LoaderScreen = ({ load }) => {

    return (
        <div className={load ? 'loader-screen' : 'load screen loader-hidden'}>
            <img src={logo} alt="" style={{ width: '200px', marginBottom: '50px' }} />
            <span className='loader'></span>
        </div>
    )
}

export default LoaderScreen