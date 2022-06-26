import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-ss.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'r', 'o', 'j'];
    const surNameArray = ['h', 'r', 'e', 's', 't', 'h', 'a'];
    const jobArray = ['B', 'l','o', 'c','k', 'C', 'h', 'a', 'i', 'n', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r','.'];
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br /><span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>                   
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={surNameArray} idx={25} />
                        <br />
                        <span className='position'>
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={31} /> 
                        </span>
                    </h1>
                    <h2>Full Stack Developer / Python Expert </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;