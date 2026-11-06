'use client'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const menu = ['beranda', 'tentang', 'koleksi', 'kontak'];

function NavbarMenu() {
    const [active, setActive] = useState('beranda');

    useEffect(() => {
        const onScroll = () => {
            let current = 'beranda';
            menu.forEach((id) => {
                const section = document.getElementById(id);
                if (section && window.scrollY >= section.offsetTop - 100) {
                    current = id;
                }
            });
            setActive(current);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar expand="lg" sticky="top" collapseOnSelect className="navbar-gelap">
            <Container>
                <Navbar.Brand href="#beranda">Mugen Art</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-menu" />
                <Navbar.Collapse id="navbar-menu">
                    <Nav className="ms-auto" activeKey={active}>
                        {menu.map((item) => (
                            <Nav.Link key={item} href={'#' + item} eventKey={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu;
