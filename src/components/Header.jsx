import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://cdn.worldvectorlogo.com/logos/shopify.svg" 
            alt="Logo de Shopify"
            className="d-inline-block align-top me-2"
            style={{ width: '40px', height: '40px' }} // Ajusta el tamaño si es necesario
          />
          <span>MARKETING PRODUCTOS - Ahora con estos precios</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3"><h4>Home</h4></Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3"><h4>Ofertas</h4></Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3"><h4>Imprescindible</h4></Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              <h4>Administración</h4>
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
