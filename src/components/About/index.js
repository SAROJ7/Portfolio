import {  faCss3, faDocker, faEthereum,  faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    I am a Full-Stack developer based in Kathmandu, Nepal.
                    I am an Information Technology undergraduate from Tribhuvan University.
                    I am very passionate about improving my coding skills & developing applications & websites.
                    I build WebApps and Websites using MERN Stack.
                    Working for myself to improve my skills. Love to build Full-Stack clones.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faDatabase} color="#F06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faEthereum} color="#215CAF" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                    </div>
                </div>
            </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default About;