import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm(
                'service_wwpctge',
                'template_d4qe8h5',
                refForm.current,
                '4W0uTESEC7QmapdD7'
        )
            .then(
                (result) => {
                    alert('Message Successfully sent!')
                    window.location.reload(false);
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again');
                }
        )
            
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="from_name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email_id'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Saroj Shrestha,
                    <br />
                    Nepal,
                    <br />
                    Duwakot, ChanguNarayan , 44600
                    <br />
                    <span>Sarojsht377@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[27.703397, 85.403958]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.703397, 85.403958]}>
                            <Popup>Saroj Lives Here, Come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            
            <Loader type='pacman' />
        </>
    )
}

export default Contact;