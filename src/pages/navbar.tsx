import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const myNavbar: React.FC = () => {
    return (
        <>
            {['sm'].map((expand, index) => (
                <Navbar key={index} expand={expand} className="mb-3" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/" className="text-white fw-bold fs-3">Taiki's Homepage</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}></Navbar.Toggle>
                       
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            style={{ width: '50%' }}
                        >
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 fs-3">
                                    <Nav.Link href="/works" className="me-5 fw-bold text-white">Works</Nav.Link>
                                    <Nav.Link href="/running" className="me-5 fw-bold text-white">Running</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}


export default myNavbar;