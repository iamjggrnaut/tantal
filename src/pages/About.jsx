import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/About/AboutHero'
import { data } from '../principles'
import Footer from '../components/Footer'
import NavMobile from '../components/NavMobile'
import MobileMenu from '../components/MobileMenu'


const About = ({ action }) => {

    return (
        <div className='home-page'>
            <Navbar />
            <NavMobile action={action} />
            <MobileMenu action={action} />
            <AboutHero />
            <div className='service-block' style={{ minHeight: '50vh' }}>
                <div className="service-container container" style={{ minheight: '50vh' }}>
                    <div className="block-title" style={{ display: 'block', }}>
                        <h2>ОСНОВНЫЕ ПРИНЦИПЫ</h2> <hr style={{ width: '90%', margin: 0 }} />
                    </div>
                    <div className="block-title" style={{ display: 'block', color: 'white', width: '90%' }}>
                        <p>
                            В основе наших принципов лежит искреннее стремление удовлетворить потребности наших клиентов. Мы – команда профессионалов, где каждый сотрудник важен, и каждый заказ ценен. Гибкость, оперативность и индивидуальный подход – ключевые принципы нашей работы. Мы не просто выполняем задачи, мы создаем решения, которые соответствуют уникальным требованиям каждого клиента.
                        </p>
                    </div>
                    <div className="block-title" style={{ display: 'block', }}>
                        <hr style={{ width: '90%', margin: 0 }} />
                    </div>
                    <div className="block-title" style={{ display: 'block', color: 'white', width: '90%' }}>
                        <p>
                            Наш опыт и энтузиазм стали нашими главными преимуществами. Мы успешно завершили несколько проектов, получив доверие клиентов и укрепив свое место в отрасли. Наш опыт позволяет нам близко работать с клиентами, понимать их потребности и предлагать наилучшие решения, даже в условиях ограниченных ресурсов.
                        </p>
                    </div>
                </div>
            </div>
            <div className='prin-block'>
                <div className='row-one'>
                    {
                        data && data.slice(0, 2)?.map(item => (
                            <div className='prin-card' key={item.id}>
                                <img src={item.icon} alt="" />
                                <h5 className='fw-bold'>{item.title}</h5>
                                <div className="block-title" style={{ display: 'block', }}>
                                    <hr style={{ width: '100%', margin: 0 }} />
                                </div>
                                <p>{item.text}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='prin-block'>
                <div className='row-one'>
                    {
                        data && data.slice(2, 4)?.map(item => (
                            <div className='prin-card' key={item.id}>
                                <img src={item.icon} alt="" />
                                <h5 className='fw-bold'>{item.title}</h5>
                                <div className="block-title" style={{ display: 'block', }}>
                                    <hr style={{ width: '100%', margin: 0 }} />
                                </div>
                                <p>{item.text}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="service-container container" style={{ minheight: '10vh', }}>
                <div className="prin-block" style={{ margin: 0 }}>
                    <div className="block-title" style={{ display: 'block', }}>
                        <h2 className=''>ТЕХНОЛОГИИ И ОБОРУДОВАНИЕ</h2>
                        <hr style={{ width: '100%', margin: 0 }} />
                    </div>
                </div>
            </div>
            <div className="service-container container" style={{ minheight: '20vh' }}>
                <div className="prin-block" style={{ margin: 0 }}>
                    <div className="block-title" style={{ display: 'block', color: 'white', width: '100%' }}>
                        <p>
                            Мы находимся на переднем крае технологического прогресса в металлообработке. Мы внедряем современные технологии и методы работы, чтобы обеспечить точность и эффективность в каждом проекте. Гибкость в выборе технологий позволяет нам адаптироваться к уникальным требованиям каждого заказчика.
                        </p>
                    </div>
                    <div className="block-title" style={{ display: 'block', }}>
                        <hr style={{ width: '100%', margin: 0 }} />
                    </div>
                    <div className="block-title" style={{ display: 'block', color: 'white', width: '90%' }}>
                        <p>
                            Наша компания гордится обладанием современным оборудованием, которое обеспечивает высокую точность и качество обработки металла. Мы ценим каждое оборудование, как ключевой элемент в создании надежных и качественных изделий. Мы стремимся использовать ресурсы эффективно, чтобы предоставить нашим клиентам результаты, которые превосходят их ожидания.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />



        </div>
    )
}

export default About