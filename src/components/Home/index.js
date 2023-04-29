import { Link } from 'react-router-dom'
import LogoTitle from '../..//assets/image/logo.png'
import './index.scss';

const Home = ()=>{
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt='developer'/>
                Juan Ruiz
                <br />
                web developer
                </h1>
                <h2>
                    frontend developer
                </h2>
                <Link to ="/contact" className="flat-buttom">Contact</Link>
            </div>
        </div>
    )
}

export default Home