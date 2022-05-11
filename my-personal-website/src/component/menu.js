import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, Outlet} from "react-router-dom";

const Menu = () => {

    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">My-website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/user">User</Nav.Link>
                        {/* <Nav.Link as={Link} to="/user">User</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
       
   <Outlet/>
   </>
    )
}
export default Menu