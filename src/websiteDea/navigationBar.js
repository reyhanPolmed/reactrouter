import { Navbar, Container, Nav } from "react-bootstrap"; 

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>REYHANFILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;