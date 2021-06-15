import React from 'react'
import {
    Navbar,
    Nav,
    Dropdown,
    Button,
    Image
} from 'react-bootstrap'
import { LOGO } from '../assets'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar fixed="top" className="px-5" style={styles.navbar} expand="lg">
                <Navbar.Brand href="#home">
                    <Image src={LOGO.default} style={styles.image} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={styles.navLink}>Home</Nav.Link>
                        <Nav.Link href="#home" style={styles.navLink}>Product</Nav.Link>
                        <Nav.Link href="#home" style={styles.navLink}>Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-light"><i class="fas fa-shopping-cart"></i></Button>
                    <Dropdown style={{ marginLeft: '10px' }}>
                        <Dropdown.Toggle style={styles.button} id="dropdown-basic">
                            Username
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = {
    navbar: {
        backgroundColor: 'rgba(0, 25, 112, .7)',
    },
    button: {
        backgroundColor: '#303f9f',
        border: 'none'
    },
    image: {
        height: '40px'
    },
    navLink: {
        color: 'white'
    }
}

export default NavigationBar