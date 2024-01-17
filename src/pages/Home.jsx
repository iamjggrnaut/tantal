import React from 'react'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import ServiceBlock from '../components/Home/ServiceBlock'
import ProductsBlock from '../components/Home/ProductsBlock'
import Reviews from '../components/Home/Reviews'
import ContactBlock from '../components/Home/ContactBlock'
import Footer from '../components/Footer'
import NavMobile from '../components/NavMobile'
import MobileMenu from '../components/MobileMenu'
import LoaderScreen from '../components/LoaderScreen'

const Home = ({ action }) => {

    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000);
    }, [])

    return (
        <div className='home-page'>
             <LoaderScreen load={load} />
            <Navbar />
            <NavMobile action={action} />
            <MobileMenu action={action} />
            <Hero />
            <ServiceBlock />
            <div className="advantages">
                <div className='container d-flex'>
                    <div className='dimmed'></div>
                    <div className="col-2"></div>
                    <div className='col pt-5'>
                        <div className="block-title">
                            <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                        </div>
                        <div>
                            <ol>
                                <li>Индивидуальный подход к каждому проекту.</li>
                                <li>Современное оборудование и технологии.</li>
                                <li>Команда профессионалов с богатым опытом.</li>
                                <li>Высокоточные и надежные решения.</li>
                                <li>Гибкость в выполнении заказов различного масштаба.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <ProductsBlock />
            <Reviews />
            <ContactBlock />
            <Footer />
        </div>
    )
}

export default Home
