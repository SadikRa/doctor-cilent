import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbaaar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link to='/login'>Login</Link>
          <Link className='mx-4' to='/services'>Services</Link>
          <Link to='/userbooking'>User booking</Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navbaaar;