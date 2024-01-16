import React from 'react'
import video from '../../assets/video.mp4'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className='hero'>
            <video src={video} className="hero-video" muted loop style={{ zIndex: 0 }}></video>
            <div className="video-overlay"></div>
            <div className="hero-container container">
                <h1 className='hero-motto'>
                    Лазерная резка. Металлообработка. Качество. Вместе мы формируем будущее.
                </h1>
                <p>
                    Добро пожаловать в ТАНТАЛ – вашем партнере в мире металлообработки и инновационных решений из металла. Мы объединяем опыт и технологии для предоставления высококачественных услуг по металлообработке, созданию уникальных металлических изделий и обработке листового металла. Наша цель – воплощение ваших идей в прочные и функциональные металлические конструкции.
                </p>

                <div>
                    <button className='prime-btn' onClick={() => navigate('/about')}>
                        Узнать больше
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
