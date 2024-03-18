import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useEffect, useState } from 'react';


import logo from '../assets/images/Logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} style={{width: '150px'}} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">

                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a target='_blank' href='https://www.linkedin.com/in/miladcoder/'><img src={navIcon1} /></a>
                            <a target='_blank' href='https://www.instagram.com/web.coder2'><img src={navIcon3} /></a>
                        </div>
                        <button className='vvd' ><a style={{textDecoration: 'none'}} target='_blank' href='https://zil.ink/miladcoder'> Let's Connect </a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

