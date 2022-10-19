
import { Col, Container, Nav, Navbar } from "react-bootstrap";

import Logo from "elements/components/Logo/Logo";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

function Navigation() {
    return (

        <Navbar className="px-1" expand="lg" bg="light" >
            <Container>
                <Col><Logo/></Col>
                <Navbar.Toggle aria-controls="navbar-collapse-section" />
                <Navbar.Collapse id="navbar-collapse-section" className="justify-content-center">
                    <Nav className="nav-buttons-parent align-items-center" as='ul'>
                        <Nav.Item as="li">
                            <Nav.Link>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Catalogue</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Cart</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Col className="d-none d-lg-block" />
            </Container>
        </Navbar>
    );
}

export default Navigation;