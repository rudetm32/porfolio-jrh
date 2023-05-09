import { Link } from 'react-router-dom';

import LogoS from '../../assets/image/logo.png'

import './index.scss';

const Home = ()=>{
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <img src={LogoS} alt='developer'/><br/> I'm  Juan Antonio Ruiz
                
                <br />
                Web Developer
                <br />
                </h1>
                <br /><br />
                <h2>
                    Frontend || Backend
                </h2>
                <Link to ="/contact" className="flat-buttom">Contact</Link>
            </div>
        </div>
    )
}

export default Home